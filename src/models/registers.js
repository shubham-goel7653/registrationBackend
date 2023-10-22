const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: {
        type: Number,
        unique: true,

    },
    password: String,
    confirmpassword: String
},
    {
        versionKey: false
    })

const Register = new mongoose.model("Register", schema)
module.exports = Register