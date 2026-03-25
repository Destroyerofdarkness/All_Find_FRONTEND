const update_req = require("../../handlers/updateContentHandler")

const update_user_bio = async(req,res)=>{
    const BODY = req.body;
    try {
        await update_req("/update/userBio", BODY)
        res.status(201).json({success:true});
    } catch (err) {
        res.status(400)
    }
}


module.exports = {update_user_bio}