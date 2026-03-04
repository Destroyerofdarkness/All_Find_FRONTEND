const { get_req }= require("../handlers/getContentHandler");

const authenticate = async(req, res, next) => {
  const token = req.cookies.jwt;
  console.log("User Token:", token);
  if (token) {
    const {success, user} = await get_req(`/verifyJWT/${token}`)
    console.log("User:",user)
    if(success){
      next()
    }else{
      res.redirect("/login")
    }
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
