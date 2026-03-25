const delete_req = require("../../handlers/deleteContentHandler")

const send_delete_game_req = async(req,res)=>{
    const {gameId} = req.body;
    try {
        const {success} = await delete_req("/game/delete", gameId)
        res.status(200).json({success})
    } catch (err) {
        res.status(500).json({err});
    }
}

const send_delete_anime_req = async(req,res)=>{
    const {animeId} = req.body
    try {
        const {success} = await delete_req("/anime/delete", animeId)
        res.status(200).json({success})
    } catch (err) {
        console.log(err)
        res.status(500).json({err});
    }
}

module.exports = {send_delete_game_req, send_delete_anime_req}