const express = require('express')
const mongoose = require('mongoos')
const user = require('./routes/user')

const app = express()
const port = 4000

app.use(express.json())

const url = 'mongodb://localhost/express'
mongoose.connect(url, { useNewUrlParser: true })
const connection = mongoose.connection

connection.on("open", () => {
    console.log('MongoDB connected');
})

app.listen(port, () => {
    console.log(`app starting => ${port}`);
})

app.use('/user', user)
