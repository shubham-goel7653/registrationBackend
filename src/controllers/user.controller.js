const Register = require("../models/registers")

exports.createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, password, confirmpassword } = req.body

        const registerEmployee = new Register({

            firstname, lastname, email, phone, password, confirmpassword
        })

        const registered = await registerEmployee.save();
        res.status(201).send(registerEmployee)
        console.log(registerEmployee)

    } catch (err) {
        res.status(400).send(err)
    }

}