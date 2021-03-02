const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
         /*띄어쓰기 없애기*/
        trim: true,
        unique:1
    },
    password: {
      type: String,
      minlength: 5  
    },
    lastname:{
        type: String,
        maxlength:50
    },
    role:{
        type: Number,
        default:0
    },
    image: String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

/*모델로 스키마를 감싸기*/
const User = mongoose.model('User',userSchema)

/*다른 파일 이용설정*/
module.exports={User}