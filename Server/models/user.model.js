const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    profileImage: {type: String, default: 'download.jpg'},
    telephone: { type: Number, required: false },
    messages: [{
        type: String,
    }],
    likedProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'property' }]
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const user = mongoose.model('user', userSchema);

module.exports = user;