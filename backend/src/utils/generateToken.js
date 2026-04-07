import jwt from "jsonwebtoken"
import config from "../config/config.js"

function generateToken(user){
    const token = jwt.sign({id:user._id,username:user.username} , config.JWT_SECRET_KEY , {expiresIn:"7d"})
    return token
}


export default generateToken