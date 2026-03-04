const { get_req } = require("../handlers/getContentHandler");

const home_get = async (req, res) => {
  try {
    const { game, anime } = await get_req("/getAllContent");
    res.render("index", { name: "Home", game, anime });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

const find_result = async (req, res,next) => {
  const id = req.params.id;
  try {
    const {content} = await get_req(`/result/${id}`)
    res.status(200).render("description", { content, name: content.Name });
  } catch (err) {
    console.log(err);
    res.status(404)
    next()
  }
};

const home_redirect = (req, res) => {
  res.redirect("/home");
};

const render_profile = async (req, res, next) => {
  const username = req.params.name;
  try {
    const userInfo = await findUsersCreations(username);
    console.log(userInfo);

    res.render("profile", {
      name: `${username} - Profile`,
      games: userInfo.Games,
      anime: userInfo.Anime,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
};

module.exports = {
  home_get,
  home_redirect,
  find_result,
  render_profile,
};
