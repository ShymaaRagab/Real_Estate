const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

adminSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const admin = mongoose.model('Admin', adminSchema);
module.exports = admin;