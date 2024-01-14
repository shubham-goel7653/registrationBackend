const express = require("express")
const app = express()
const path = require("path")

const port = process.env.PORT || 3000
const router = require('./routes/user.route')
const mongoose = require("mongoose")
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,

}

mongoose.connect("mongodb+srv://mernBackend:123@cluster0.jx91zvh.mongodb.net/", connectionParams)
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running at port ${port}`)
    })
  }).catch((err) => {
    console.log("no connection", err)
  })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/form', router)




