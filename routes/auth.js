const router = require("express").Router();
const {checkCurrentUser}= require("../middleware/jwtAuth.js")
const controller = require("../controllers/authControllers.js")

router.get("/login",controller.render_login)

router.get("/register" , controller.render_register)

router.get("/createCookie/:token", controller.createCookie)

router.get("/logout", controller.logout)


module.exports = router