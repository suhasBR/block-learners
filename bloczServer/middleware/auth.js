const jwt = require('jsonwebtoken');
const config = require('config');

//function that has access to request, response cycle next is passed once done
module.exports = function (req,res,next) {

    //Get token from header

    const token = req.header('x-auth-token');

    //Check if no token
    if(!token){
        return res.status(401).json({ msg: 'No token, authorization denied'});
    }

    //Verify token
    try{
        const decoded = jwt.verify(token,process.env.SECRET);
        req.user = decoded.user;
        
        next();

    }catch(err){
        //token exists but not valid
        res.status(401).json({ msg: 'Token is not valid'});
    }

};