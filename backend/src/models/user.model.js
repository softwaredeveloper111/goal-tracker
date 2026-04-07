import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import config from "../config/config.js"


const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"username is required"],
    unique:[true,"username must be unique"],
    trim:true,
    minlength:[3,"username must be at least 3 characters"],
    maxlength:[20,"username must be at most 30 characters"],
    match:[/^[A-Za-z_][A-Za-z0-9_]*$/,"username must start with a letter or underscore and can only contain letters, numbers, and underscores"]
  },
  email:{
    type:String,
    required:[true,"email is required"],
    unique:[true,"email must be unique"],
    trim:true,
    lowercase:true,
    match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"email must be a valid email address"]
  },
  password:{
     type:String,
     select:false,
      required:[true,"password is required"],
  }
  ,

  avatar:{
     type:String,
     default:'https://ik.imagekit.io/a490stdk4/profile.webp'
  }

},{timestamps:true})




userSchema.pre("save",async function(){
 try {
   const user = this;
  if(user.isModified("password")){

   const hash = await bcrypt.hash(user.password, Number(config.BCRYPT_SALT_ROUND));
    user.password = hash  
  }
 } catch (error) {
  throw new Error("password unable to convert in hash");
   console.log(error.message)
 }
})





userSchema.methods.comparePassword = async function(userPassword){
  return  await bcrypt.compare(userPassword,this.password)
}





userSchema.methods.toJSON = function(){
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
}






const userModel = mongoose.model("User",userSchema);
export default userModel;