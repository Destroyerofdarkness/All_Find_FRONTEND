const router = require("express").Router();
const controller = require("../../controllers/deleteControllers.js");

router.delete("/game", controller.send_delete_game_req)

router.delete("/anime", controller.send_delete_anime_req)


module.exports = router