

const User = require("../models/User.js")

const {handleAuthError}= require("../handlers/errorHandler.js")

const maxValidDate = 3*24*60*60

const render_login = (req,res )=>{
    try{
        res.render("auth/login",{name:"Login"})
    }catch(err){
        res.status(500).send(err)
    }
}

const render_register = (req,res)=>{
    try{
        res.render("auth/register", {name:"Register"})
    }catch{
        res.status(500).send(err)
    }
}

const createCookie = (req,res)=>{
    const token = req.params.token
    try{
        res.cookie("jwt",token, {httpOnly: true, maxAge: maxValidDate *1000})
        res.redirect("/home")
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

const logout= (req,res) =>{
try{
    res.cookie("jwt", "", {maxAge: 10})
    res.redirect("/login")
}catch(err){
 res.status(500).send(err)
}
}

module.exports = {
    render_login,
    render_register,
    logout,
    createCookie
}