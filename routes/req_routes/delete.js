const router = require("express").Router();
const controller = require("../../controllers/API_req/deleteControllers");
const {authenticate} = require("../../middleware/jwtAuth");

router.delete("/game",authenticate, controller.send_delete_game_req)

router.delete("/anime",authenticate, controller.send_delete_anime_req)

router.delete("/comment",authenticate, controller.send_delete_comment_req)

module.exports = router