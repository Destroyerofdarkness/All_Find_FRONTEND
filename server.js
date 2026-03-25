//Requiered modules
const express = require("express");

const path = require("path");

const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

const cors = require("cors");

require("dotenv").config();

const app = express();

//Middleware
const { checkUser } = require("./middleware/jwtAuth.js");

//Routes
const home = require("./routes/home.js");

const gameRoute = require("./routes/game.js");

const animeRoute = require("./routes/anime.js");

const authRoute = require("./routes/auth.js");

//Req Routes
const postRoute = require("./routes/req_routes/post.js");

const deleteRoute = require("./routes/req_routes/delete.js");

const updateRoute = require("./routes/req_routes/update.js")

//Options conf
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.HOST,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//Used middleware

app.use(checkUser);

//Used Routes
app.use("/home/anime", animeRoute);

app.use("/home/game", gameRoute);

app.use("/post", postRoute);

app.use("/delete", deleteRoute);

app.use("/update", updateRoute);

app.use(home);

app.use(authRoute);

app.use((req, res) => {
  res.status(404).render("404", { name: "Page Not Found" });
});

//Server Start
app.listen(process.env.PORT, "0.0.0.0", async () => {
  console.log("Server is running on port:", process.env.PORT);
});
