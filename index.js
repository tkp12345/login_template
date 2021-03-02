/* express 모듈 가져옴 */
const express = require('express')
/*새로운 exppress app을 만듬*/
const app = express()
/*포트 번호*/
const port = 5000
/*#9*/
const config = require('./config/key');
/* #7*/ 
const bodyParser = require('body-parser');
const {User} =require("./models/Users")


/*url 타입 정보 */
app.use(bodyParser.urlencoded({extended: true}));
/*JSON 타입 정보 */
app.use(bodyParser.json());

const mongoose =require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('Success Connected....'))
  .catch(err => console.log(error))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/* #7*/ 
app.post('/register', (req, res) =>{
    /*회원 가입 필요정보  client 에서 가져오고 데이터 베이스에 넣어준다.*/

    const user = new User(req.body)

    /*error , success 일때 json 데이터 전달  */
    user.save((err,userInfo)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success:true
        })
    })
})

/*app 이 5000포트에 리슨하면 log 출력*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})