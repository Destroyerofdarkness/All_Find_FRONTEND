const express = require("express")

const router = express.Router()

const AniController = require("../controllers/animeControllers")

const {authenticate} = require("../middleware/jwtAuth")

router.get("/register", authenticate, AniController.register_anime_page )

module.exports = router