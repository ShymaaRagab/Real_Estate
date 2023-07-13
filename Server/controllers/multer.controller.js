const multer = require('multer');

// Multer configuration for property images
const propertyImageStorage = multer.diskStorage({
destination: function (req, file, cb) {
    cb(null, 'uploads/properties');},
filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);}
});


const propertyImageUpload = multer({
    storage: propertyImageStorage,
    limits: {
        fileSize: 1024 * 1024 * 30000000, // Limit to 3MB
        files: true
},
    fileFilter: function (req, file, cb) {
        if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jfif" ||
        file.mimetype === "image/pjpeg" ||
        file.mimetype === "image/pjp" ||
        file.mimetype === "video/mp4"
        ) {
    cb(null, true);
    } else {
        cb(
            new Error("Only .jpeg, .png, .jpg, .jfif, .pjpeg, .pjp and .mp4 formats allowed!")
        );
        }
    }
});

// Multer configuration for user profile image
const userProfileImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/profiles');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const userProfileImageUpload = multer({
    storage: userProfileImageStorage,
    limits: {
        fileSize: 1024 * 1024 * 3, // Limit to 3MB
        files: 1 // Limit to a single file
    },
    fileFilter: function (req, file, cb) {
        if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jfif" ||
        file.mimetype === "image/pjpeg" ||
        file.mimetype === "image/pjp"
        ) {
        cb(null, true);
        } else {
        cb(
            new Error("Only .jpeg, .png, .jpg, .jfif, .pjpeg, .pjp formats allowed!")
        );
        }
    }
});

module.exports = {
    propertyImageUpload,
    userProfileImageUpload
};