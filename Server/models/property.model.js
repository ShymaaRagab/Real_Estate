const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        enum:["Cairo", "Giza", "Alexandria"],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        //required: true
    }],
    video: {
        type: String
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    type:{
        type: String,
        enum:["Office", "Shop", "Apartment"],
        required: true
    },
    status:{
        type: String,
        enum:["sale", "rent"],
        required: true
    },
    rooms:{
        type: Number,
    },
    size:{
        type: Number,
        required:true
    },
    baths:{
        type: Number,
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    likes: { type: Number, default: 0 },
    isRejected: {
        type: Boolean,
        default: false
    }

});

const property = mongoose.model('property', propertySchema);
module.exports = property;