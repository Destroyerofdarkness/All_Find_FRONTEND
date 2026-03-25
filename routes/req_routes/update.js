const express = require("express");

const router = express.Router();

const controller = require("../../controllers/API_req/updateControllers");


router.put("/userBio", controller.update_user_bio);


module.exports = router;