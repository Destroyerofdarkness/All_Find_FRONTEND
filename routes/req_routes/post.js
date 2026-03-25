const router = require("express").Router();
const controller = require("../../controllers/API_req/postControllers")


router.post("/anime", controller.send_post_anime_req)

router.post("/game", controller.send_post_game_req)

router.post("/login", controller.send_post_login_req)

router.post("/register", controller.send_post_register_req)

module.exports = router