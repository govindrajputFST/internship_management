const { addError } =require( "../error");
const User =require( "../model/User");
const bcrypt =require("bcrypt");
const jwt =require( "jsonwebtoken");

 const signup= async (req,res,next)=>{
    try {
        
  
        const checkUser=await User.findOne({userName:req.body.userName});
        if(checkUser){
            return next(addError(400,"UserName is Already Exist!"));
        }
        const checkEmail = await User.findOne({ email: req.body.email })
        if(checkEmail){
            return next(addError(400,"Email is Already Exist!"))
        }
        const hash=bcrypt.hashSync(req.body.password,10);
        const newUser=new User({...req.body,password:hash});
        const user=await User.create(newUser);
        console.log("User sign up successfully");

        const token =jwt.sign({id:user._id},process.env.secertKey);
        const{password,...other}=user._doc;
        const tenYearsFormsNow=new Date();
        tenYearsFormsNow.setFullYear(tenYearsFormsNow.getFullYear()+10);
        res.cookie("access-Token", token,{
            path:'/',
            secure:true,
            sameSite:"none",
            httpOnly:true,
            expires:tenYearsFormsNow
        }).status(200).json(other);

    } catch (error) {
        next(addError(500,"Not able to create!"))
    }

}
 const login=async(req,res,next)=>{
    try {
        const user=await User.findOne({username:req.body.userName})
        if(user){
            return next(addError(400,"UserName is already exist!"))
        }
        const isPassword=await bcrypt.compare(req.body.password,user.password);
        if(!isPassword){
            return next(addError(400,"PassWord  is incorrect!"))
        }
        console.log("user signin  is successfull");
        const token=jwt.sign({id:user._id},process.env.secertKey)
        const {password,...other}=user._doc;
        const tenYearsFormsNow=new Date();
        tenYearsFormsNow.setFullYear(tenYearsFormsNow.getFullYear()+10);
        res.cookie("access-Token", token,{
            path:'/',
            secure:true,
            sameSite:"none",
            httpOnly:true,
            expires:tenYearsFormsNow
        }).status(200).json(other);

    } catch (error) {
        next(error);
    }
}

 const logout=async(req,res,next)=>{
    try {
        return res.cookie("access-Token","",{
            expires:new Date(0),path:'/',
            httpOnly:true,
            path:'/',
            secur:true,
            samesite:"none"
        }).status(200).json("Logout");
    } catch (error) {
        next(error)
    }
}
 const googlelogin=async(req,res,next)=>{
    try {
        const checkEmail=await User.findOne({email:req.body.email});
        if(checkEmail){
            const user=checkEmail;
            const token=jwt.sign({id:user._id},process.env.secertKey);
            const {password,...other}=user._doc;
            const tenYearsFormsNow=new Date();
            tenYearsFormsNow.setFullYear(tenYearsFormsNow.getFullYear()+10);
            return res.cookie("access-Token",token,{
                path:'/',
                secure:true,
                sameSite:"none",
                httpOnly:true,
                expires:tenYearsFormsNow,
            }).status(200).json(other);
        }else{
            const newUser=new User({...req.body});
            const user=await User.create(newUser);
            const token=jwt.sign({id:user._id},process.env.secertKey)
            const {password,...other}=user._doc;
            const tenYearsFormsNow=new Date();
            tenYearsFormsNow.setFullYear(tenYearsFormsNow.getFullYear()+10)
            return res.cookie("access-Token",token,{
                path:'/',
                secure:true,
            sameSite:true,
        httpOnly:true,
    expires:tenYearsFormsNow ,
          }).status(200).json(other);
        }
    } catch (error) {
        next(error);
    }
}
module.exports.signup=signup;
module.exports.login=login;
module.exports.logout=logout;
module.exports.googlelogin=googlelogin;
