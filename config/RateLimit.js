const limiter = require("express-rate-limit")



const limit = limiter({
    windowMs:15*60*1000,
    statusCode:239,
    limit:10,
    message:"Too Many Requests at Once!! Try again in 15 minutes!!"
})


module.exports = limit