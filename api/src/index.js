const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const {port, host, db, authApiUrl} = require('./config')
const {connectDb} = require('./helpers/db')

const app = express()

const kittySchema = new mongoose.Schema({
    name: String
})

const Kitten = mongoose.model('Kitten', kittySchema)

app.get('/test', (req, res) => {
    res.send("Our api server is working correctly")
})

app.get("/testapidata", (req, res) => {
    res.json({
        testapidata: true
    })
})

app.get('/testwithcurrentuser', (req, res) => {
    axios.get(`${authApiUrl}/currentUser`)
        .then(response => {
            res.json({
                testwithcurrentuser: true,
                currentUserFromAuth: response.data
            })
        })
})

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api service on port ${port}`)
        console.log(`Our host is ${host}`);
        console.log(`Database url ${db}`);
        console.log(`Auth api url ${authApiUrl}`);

        const silence = new Kitten({ name: 'Silence' });
        silence.save((err, result) => {
            if (err)
                return console.log(err)
            console.log(`result with volumes ==> ${result}`);
        })

    })
}

connectDb()
    .on('error',console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)

