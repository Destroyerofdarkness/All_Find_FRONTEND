const jwt = require("jsonwebtoken");

const { get_req }= require("../handlers/getContentHandler");

const authenticate = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("User Token:", token);
  if (token) {
    jwt.verify(token, process.env.secret, (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.redirect("/login");
      }else{
        console.log(decodedToken.id);
        next()
      }
    });
  } else {
    res.redirect("/login");
  }
};

const checkCurrentUser = (req, res, next) => {
  const token = req.cookies.jwt;
    if(token){
      res.redirect("/")
    }else{
      next()
    }
};


const checkUser = async(req,res,next)=>{
  const token = req.cookies.jwt;
  console.log("User Token:", token);
  if (token) {
    const {success, user} = await get_req(`/verifyJWT/${token}`)
    console.log("User:",user)
    if(success){
      res.locals.user = user
      next()
    }else{
      res.locals.user = null
      next()
    }
  } else {
    res.locals.user = null
    next()
  }
}

module.exports = { authenticate, checkUser, checkCurrentUser };
