const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    _id: String,
    firstname: String,
    lastname: String,
    email: String,
    phone: {
        type: Number,
        unique: true,

    },
    password: String
},
    {
        versionKey: false
    })

const Register = new mongoose.model("Register", schema)
module.exports = Register