const createError = require('http-errors');
const Admin = require('../models/admin.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const generateAccessToken = (admin) => {
    return jwt.sign(admin, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '566h' });
};

module.exports = {
    signup: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
    
            const existingAdmin = await Admin.findOne({ email });
                if (existingAdmin) {
            throw createError(409, 'Email already exists');
            }
    
            const hashedPassword = await bcrypt.hash(password, 10);
    
            const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword,
            });
    
            const result = await newAdmin.save();
    
            const accessToken = generateAccessToken({ email });
    
            res.send({ admin: result, accessToken });
        } catch (error) {
            console.log(error.message);
            next(createError(400, error.message));
        }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const admin = await Admin.findOne({ email });
        if (!admin) {
            throw createError(401, 'Invalid email or password');
        }

            const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            throw createError(401, 'Invalid email or password');
        }

        const accessToken = generateAccessToken({ email });

        res.send({ admin, accessToken });
        } catch (error) {
            console.log(error.message);
            next(createError(400, error.message));
        }
},

    authenticateToken: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, admin) => {
            if (err) return res.sendStatus(403);
            req.admin = admin;
            next();
        });
},
};