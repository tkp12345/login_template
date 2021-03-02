/* express 모듈 가져옴 */
const express = require('express')
/*새로운 exppress app을 만듬*/
const app = express()
/*포트 번호*/
const port = 5000

const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://roberto:1234@roberto.pzzdk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('Success Connected....'))
  .catch(err => console.log(error))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*app 이 5000포트에 리슨하면 log 출력*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})