
//Register game and go to the page
const register_game = (req, res) => {
  res.render("games/register", { name: "Register Game" });
  console.log("Loaded in register page");
};

module.exports = {
  register_game,
};
