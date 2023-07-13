const createError = require('http-errors');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const generateAccessToken = (user, logout = false) => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        logout: logout
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '677h' });
};

module.exports = {
    signup: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
    
            const existingUser = await User.findOne({ email });
                if (existingUser) {
            throw createError(409, 'Email already exists');
            }
    
            const hashedPassword = await bcrypt.hash(password, 10);
    
            const newUser = new User({
            name,
            email,
            password: hashedPassword,
            });
    
            const result = await newUser.save();
    
            const accessToken = generateAccessToken({ email });
    
            res.send({ user: { id: newUser._id, name: newUser.name, email: newUser.email }, accessToken });
        } catch (error) {
            console.log(error.message);
            next(createError(400, error.message));
        }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });
        if (!user) {
            throw createError(401, 'Invalid email or password');
        }

            const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw createError(401, 'Invalid email or password');
        }

        const accessToken = generateAccessToken(user);
        res.send({ user: { id: user._id, name: user.name, email: user.email }, accessToken });

        res.send({ user, accessToken });
        } catch (error) {
            console.log(error.message);
            next(createError(400, error.message));
        }
},

logout : async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.decode(token);
    
            const updatedToken = generateAccessToken(decodedToken, true);
    
            res.send({ message: "User logged out successfully", updatedToken });
        } catch (error) {
            console.log(error.message);
            next(createError(400, error.message));
        }
    },

    authenticateToken: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedToken) => {
            if (err) return res.sendStatus(403);
            if (decodedToken.logout) return res.sendStatus(401);
    
            const user = await User.findById(decodedToken.id);
            req.user = user;
            next();
        });
    }
};
