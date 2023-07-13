const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URI;

module.exports = () =>{
mongoose.set("strictQuery", false);
mongoose.connect(mongoUrl)
.then(()=>{
    console.log('mongo connected....');
})
.catch(err => console.log(err.message));

mongoose.connection.on('connected', () => {
    console.log('mongoose connected to db...');
});

mongoose.connection.on('error',(err) =>{
    console.log(err.message);
});

mongoose.connection.on('disconnected', () =>{
    console.log('mongoose disconected...');
});


process.on('SIGINT', () =>{
    mongoose.connection.close(()=>{
        console.log('mongoose connection is disconnected');
        process.exit(0);
    })
    
});
}