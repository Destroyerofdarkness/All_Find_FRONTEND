
const register_anime_page = (req, res) => {
  res.render("anime/registerAni", { name: "Register Anime" });
};

const anime_page_delete = async (req, res) => {
  const id = req.params.id;
  try{
    const result = await anime
    .findByIdAndDelete(id)
    console.log("DELETED", result);
      res.redirect("/home");
  }catch(err){
    console.log(err)
    res.status(301).send(err)
  }  
};

module.exports = {
  register_anime_page,
  anime_page_delete,
};
