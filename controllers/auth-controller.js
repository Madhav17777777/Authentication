
const User =require("../models/user-model");
const bcrypt= require("bcryptjs");
const home= async(req,res)=>{
  try{
    res.send("welcome to mgctutorials..");
  }catch(error){
    console.log(error);
  }

};
const register=async(req,res)=>{
  try{
    // console.log("happy hacking");
    const {username , email , phone , password}=req.body;
    const userExist= await User.findOne({email});
    if(userExist){
      return res.status(400).json({msg:"email already exists"});
    }
    // const saltRound=10;
    // const hash_password = await bcrypt.hash(password,saltRound);
    const usercreated= await User.create({username , email , phone ,
       password});
    res.json({message: "registration succesfull",token: await usercreated.generateToken(),userId:
    usercreated._id.toString() });
    // console.log( req.body);
  }catch(error){
    console.log(error);
  }
};
const login = async(req,res)=>{
  try{
    const {email,password}=req.body;
    const userExist=await User.findOne({email});

    if(!userExist){
      return res.status(400).json({message: "invalid credentials"});
    }
    // const user=await bcrypt.compare(password,userExist.password);
    const user=await userExist.comparePassword(password);


    if(user){
      res.json({message: "login succesfull",token: await userExist.generateToken(),userId:
      userExist._id.toString()});
    }else{
      res.status(401).json({message: "invalid email or password"});
    }
  }catch(error){
    console.log(error);
    res.status(500).json("internal server error");
    // next(error);
  }
};

module.exports={home, register,login};