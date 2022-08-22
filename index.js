const express = require('express')
const app = express()
const port = 4000

// 앱과 몽고디비를 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mongouser:mongo220822@boilerplate.gcc62to.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('MongoDB Connected...')).catch(err=>console.log(err))


app.get('/', (req, res)=> res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))