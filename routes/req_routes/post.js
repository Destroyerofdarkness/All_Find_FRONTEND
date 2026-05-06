const router = require("express").Router();
const controller = require("../../controllers/API_req/postControllers");
const limit = require("../../config/RateLimit");
const {authenticate} = require("../../middleware/jwtAuth");

router.use(limit);

router.post("/anime",authenticate, controller.send_post_anime_req);

router.post("/game",authenticate, controller.send_post_game_req);

router.post("/login", controller.send_post_login_req);

router.post("/register", controller.send_post_register_req);

router.post("/comment",authenticate, controller.send_post_comment_req);

module.exports = router;
