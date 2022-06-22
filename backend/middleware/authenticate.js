const jwt = require("jsonwebtoken");
const User = require("../models/user");
var cookieParser = require('cookie-parser')



const Authenticate = async(req,res,next) =>{
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,"Thisisthesecretkey");

        const mainUser = await User.findOne({_id: verifyToken._id,"tokens.token":token});

        if(!mainUser){
             throw new Error('User not Found');
        }

        req.token = token;
        req.mainUser = mainUser;
        req.email = mainUser.email;
        req.userID = mainUser._id;
        // console.log(req.mainUser._id);
        // console.log(req.email);
        next();

    } catch (error) {
        res.status(401).send('Unauthorized Access');
        console.log(error);
    }

}


module.exports = Authenticate;