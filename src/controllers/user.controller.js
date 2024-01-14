const Register = require("../models/registers")
const bcrypt = require('bcrypt')
const UUID = require('uuid')

exports.createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)

        const registerEmployee = new Register({
            _id : UUID.v4(),
            firstname, lastname, email, phone, 
            password: hashedPassword
        })

        const registered = await registerEmployee.save();
        res.status(201).send(registerEmployee)
        console.log(registerEmployee)

    } catch (err) {
        res.status(400).send(err)
    }

}

exports.phone = async (req,res)=>{
    
   try{
    const result = await Register.findOne({firstname: "shubham"},{phone:1})
   console.log(result)
   res.status(200).send({result})
   }catch(err){
    console.log("error")
   }
}