const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({

    name:{
        type:String ,
        required : true ,

    } ,
    email :{
        type : String ,
        unique : true ,
        required : true ,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    } ,
    password :{
        type : String ,
        required : true ,
        minlength: 7 
    } ,

    tokens : [{
        token :{
            type : String ,
            required :true
        }
    }]
})


/// this is a generate tokens function for every user logn in to the site

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id : user._id.toString() } , 'thisismyname')

    user.tokens = user.tokens.concat({token})
    await user.save()
    
    return token
}

userSchema.statics.findByCredentials = async(email , password)=>{
    const user = await User.findOne({email})

    if(!user){
        throw new Error('unable to login')
    }
    const isMatch = await bcrypt.compare(password , user.password)

    if(!isMatch){
        throw new Error('unable to login')
    }

    return user
}

const User = mongoose.model('User' , userSchema)

module.exports = User