const express = require('express')
const mongoose = require('mongoose')
const {port, host, db} = require('./config')
const {connectDb} = require('./helpers/db')

const app = express()



app.get('/test', (req, res) => {
    res.send("Our authentication server is working correctly")
})

app.get('/api/currentUser', (req, res) => {
    res.json({
        id:"1234",
        email:"user@mail.com"
    })
})

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started authentication service on port ${port}`)
        console.log(`Our host is ${host}`);
        console.log(`Database url ${db}`);
    })
}

connectDb()
    .on('error',console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)

