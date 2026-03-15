const register_anime_page = (req, res) => {
  res.render("anime/registerAni", { name: "Register Anime" });
};

module.exports = {
  register_anime_page,
};
