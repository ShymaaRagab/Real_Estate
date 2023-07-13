const userData = require('../models/user.model');
const createError = require("http-errors");
const mongoose = require('mongoose');
const multer = require('multer');
const { userProfileImageUpload } = require('./multer.controller');

module.exports = {
    getAllUsers: async (req,res,next)=>{
        try { //query projection
        const result = await userData.find({},{});
        res.send(result);
        } catch (error) {
        console.log(error.message);
        next(createError(400, error.message));
        }
        },
        
    findUserById: async (req,res,next)=>{
        const id = req.params.id;
        try {
            const user =await userData.findById(id);
            if(!user){
                throw createError(404,'user not found');
            }
            res.send(user);
            } 
        catch (error) {
            console.log(error.message);
            if(error instanceof mongoose.CastError){
                next(createError(400,('invalid user id')));
                return;
            }
            next(createError(400, error.message));
        }
    },
        
    addUser:async (req,res,next)=>{
        try {
            const user = new userData(req.body);
            const result = await user.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if(error.name ==='ValidationError'){
                next(createError(422,error.message));
                return;
            }
            next(createError(400, error.message));
        }
    },
        
    deleteUserById:async (req,res,next)=>{
        const id = req.params.id;
        try {
            const result = await userData.findByIdAndDelete(id);
            if(!result){
                throw createError(404,'user not found');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if(error instanceof mongoose.CastError){
                next(createError(400,('invalid user id')));
                return;
            }
            next(createError(400, error.message));
        }
    },
        

    updateUserById: async (req, res, next) => {
            try {
            const id = req.user.id;
        
            // Check if a file was uploaded and handle it with the middleware
            const upload = userProfileImageUpload.single('profileImage');
            upload(req, res, async (err) => {
                if (err instanceof multer.MulterError) {
                return next(createError(400, 'Image upload error'));
                } else if (err) {
                return next(createError(400, err.message));
                }
        
                // Get the updated user information
                const updates = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                telephone: req.body.telephone,
                updated_at: Date.now(),
                };
                
                // Check if a file was uploaded and update the profileImage field if needed
                if (req.file) {
                updates.profileImage = req.file.filename;
                }
        
                const options = { new: true };
                const result = await userData.findByIdAndUpdate(id, updates, options);
        
                if (!result) {
                throw createError(404, 'user does not exist');
                }
        
                res.send(result);
            });
            } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'invalid user id'));
                return;
            }
            next(createError(400, error.message));
            }
        },
        addMessage: async (req, res, next) => {
            try {
              const id = req.user.id; // Assuming the authenticated user's ID is stored in req.user.id
          
              // Get the updated user information
              const message = req.body.messages;
          
              // Check if the user exists
              const user = await userData.findById(id);
              if (!user) {
                return res.status(404).json({ error: 'User not found' });
              }
          
              // Append the new message to the existing messages array
              user.messages.push(message);
          
              // Save the updated user information
              const result = await user.save();
              res.send(result.messages);
            } catch (error) {
              console.log(error.message);
              if (error instanceof mongoose.CastError) {
                return next(createError(400, 'Invalid user ID'));
              }
              next(createError(400, error.message));
            }
          },
        getAllMessages: async (req,res,next)=>{
            try { //query projection
            const result = await userData.find({ messages: { $ne: [], $exists: true, $not: { $size: 0 } } });
            res.send(result);
            } catch (error) {
            console.log(error.message);
            next(createError(400, error.message));
        }
    },
    getLikedProperty: async (req, res, next) => {
        try {
            const userId = req.user.id;
            const user = await userData.findById(userId).populate('likedProperties');
            const likedProperties = user.likedProperties;
        
            // Pagination
            const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
            const limit = parseInt(req.query.limit) || 3; // Default to 10 properties per page if not provided
        
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
        
            const paginatedProperties = likedProperties.slice(startIndex, endIndex);
            const totalPages = Math.ceil(likedProperties.length / limit);
        
            res.status(200).json({ likedProperties: paginatedProperties, totalPages });
        } catch (error) {
            console.error(error);
            next(createError(400, error.message));
        }
    }
};