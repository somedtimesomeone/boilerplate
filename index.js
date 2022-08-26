const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');

const MONGODB_USER_ID="mongouser"
const MONGODB_USER_PW="mongo220822"
// const MONGODB_USER_ID=process.env.REACT_APP_MONGODB_USER_ID
// const MONGODB_USER_PW=process.env.REACT_APP_MONGODB_USER_PW

const { User }= require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

// 앱과 몽고디비를 연결
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://${MONGODB_USER_ID}:${MONGODB_USER_PW}@boilerplate.gcc62to.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))


app.get('/', (req, res)=> {
    // res.send('Hello World!')
    // res.send(`${MONGODB_USER_ID} / ${MONGODB_USER_PW}`)
    res.send("우하하하핳하하하ㄴㅇㄹㄴㄹ하")
})



app.post('/register', (req, res)=>{
    // 회원가입할때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다

    // res.send("good working")
    // console.log("post ...") 

    const user = new User(req.body)
    

    user.save((err, userInfo)=>{
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))