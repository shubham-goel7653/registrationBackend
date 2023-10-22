exports.validateCreateUser = (req, res, next) => {

    const array = ["firstname", "lastname", "email", "phone", "password", "confirmpassword"]
    array.forEach((element) => {
        if (!req.body[element]) return res.status(400).send({ message: `${element} is missing`, status: 400 });
    })

    if (req.body.phone.length !== 10) return res.status(404).send({ 'message': 'fail' });
    const password = req.body.password
    const cpassword = req.body.confirmpassword

    if (password === cpassword) {
        next()
    } else {
        return res.status(400).send({ 'message': 'password not matched', status: '400' })
    }
}