const post_req = require("../../handlers/postContentHandler");

//Auth
const send_post_login_req = async (req, res) => {
  try {
    console.log(req.body);
    const { error, success, token } = await post_req("/login", req.body);
    if (error) {
      console.log(error);
      res.status(400).json({ error });
    } else {
      res.status(200).json({ success, token });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const send_post_register_req = async (req, res) => {
  try {
    console.log(req.body);
    const { error, success, token } = await post_req("/register", req.body);
    if (error) {
      console.log(error);
      res.status(400).json({ error });
    } else {
      res.status(200).json({ success, token });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

//Register Games And Anime
const send_post_anime_req = async (req, res) => {
  try {
    console.log(req.body);
    const { error, success } = await post_req("/anime/register", req.body);
    if (error) {
      console.log(error);
      res.status(400).json({ error });
    } else {
      res.status(200).json({ success });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

const send_post_game_req = async (req, res) => {
  try {
    console.log(req.body);
    const { error, success } = await post_req("/game/register", req.body);
    if (error) {
      console.log(error);
      res.status(400).json({ error });
    } else {
      res.status(200).json({ success });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

//Comment and report post

const send_post_comment_req = async (req, res) => {
  try {
    const { err, success } = await post_req("/comment/register", req.body);
    if(err){
      res.status(400).json({err});
    }else{
      res.status(200).json({success});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

module.exports = {
  send_post_anime_req,
  send_post_game_req,
  send_post_login_req,
  send_post_register_req,
  send_post_comment_req
};
