const express = require("express");

const router = express.Router();

const controller = require("../../controllers/API_req/updateControllers");

const {authenticate} = require("../../middleware/jwtAuth");

router.put("/userBio",authenticate, controller.update_user_bio);


module.exports = router;