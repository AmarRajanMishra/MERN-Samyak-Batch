const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.DATABASE)
    .then(()=>console.log('Database connection established'))
    .catch((err)=>console.log('Error in connecting'))
}


module.exports = connectDB;