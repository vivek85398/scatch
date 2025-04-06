const mongoose = require('mongoose');

async function connectMongoDb(){
    await mongoose.connect("mongodb://127.0.0.1:27017/scatch");
    console.log('connected to MongoDB Database');
}
connectMongoDb();

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String,
    cart: [{
        type: mongoose.Schema.ObjectId,
        ref: "product"
    }],
    orders: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    contact: Number,
    picture: String
});

module.exports = mongoose.model('user', userSchema);