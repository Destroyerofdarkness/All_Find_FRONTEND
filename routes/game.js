const express = require("express")
const router = express.Router()
const gameRoute = require("../controllers/gameControllers")

const {authenticate} = require("../middleware/jwtAuth")

router.get("/register",authenticate, gameRoute.register_game )

module.exports = router