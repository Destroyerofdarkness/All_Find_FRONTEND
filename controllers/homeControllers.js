const get_req  = require("../handlers/getContentHandler");

const home_get = async (req, res) => {
  try {
    const { games, anime } = await get_req("/getAllContent");
    res.render("index", { name: "Home", games, anime });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

const find_result = async (req, res, next) => {
  const id = req.params.id;
  try {
    const { content } = await get_req(`/result/${id}`);
    res.status(200).render("description", { content, name: content.Name });
  } catch (err) {
    console.log(err);
    res.status(404);
    next();
  }
};

const home_redirect = (req, res) => {
  res.redirect("/home");
};

const render_profile = async (req, res, next) => {
  const username = req.params.name;
  try {
    const { userInfo, user } = await get_req(`/user/${username}`);
    console.log("User profile:",user);

    res.render("profile", {
      name: `${user.user} - Profile`,
      userData:user,
      games: userInfo.Games,
      anime: userInfo.Anime,
    });
  } catch (err) {
    console.log(err);
    res.status(404);
    next();
  }
};


const get_Search_Content = async(req,res)=>{
  try {
    const {games, anime} = await get_req("/getAllContent");
    res.status(200).json({games, anime, message: "Fetched Content;"})
  } catch (err) {
    console.log(err);
    res.status(500).json({data:null, message: "Couldn't fetch Content"})
  }
}

module.exports = {
  home_get,
  home_redirect,
  find_result,
  render_profile,
  get_Search_Content
};
