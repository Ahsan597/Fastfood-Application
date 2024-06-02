const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const cors = require('cors')
app.use(bodyParser.json())

app.use(cors())

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fastfire")
    .then(res => { console.log("connected mongoose") })
mongoose.connection.on('err', err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/', require('./router/index'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})