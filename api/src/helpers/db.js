const mongoose = require('mongoose');
const {db} = require('../config')

mongoose.set('strictQuery', false)

module.exports.connectDb =  () => {
    mongoose.connect(db).catch(err => console.log(err))

    return mongoose.connection
}