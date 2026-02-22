const express = require("express");

const path = require("path");

const mongoose = require("mongoose");

const cookieParser = require("cookie-parser")

const cors = require("cors");

require("dotenv").config();

const app = express();

const {checkUser} = require("./middleware/jwtAuth.js")

const {search}= require("./middleware/search.js")

const home = require("./routes/home.js");

const gameRoute = require("./routes/game.js");

const animeRoute = require("./routes/anime.js");

const authRoute = require("./routes/auth.js")

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET","POST", "DELETE","PUT"],
    allowedHeaders: ["Content-Type","Authorization"]
}))

app.use(search)

app.use(checkUser)

app.use("/home/anime", animeRoute);

app.use("/home/game", gameRoute);

app.use(home);

app.use(authRoute)

app.use((req, res) =>{
    res.status(404).render("404", {name: "Page Not Found"});
});


app.listen(process.env.PORT,"0.0.0.0", async()=>{
console.log("Server is running on port:", process.env.PORT)
});
