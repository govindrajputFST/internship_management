const mongoose= require( "mongoose");

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        trim:true,
        // required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    img:{
        type:String,
        default:"img"
    },
    bannerImg:{
        type:String,
    },
    channelInfo:{
        type:String,
    },
    followers:{
        type:Number,
        default:0,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{timestamps:true})

module.exports= mongoose.model("Users",UserSchema)