const update_req = require("../../handlers/updateContentHandler")

const update_user_bio = async(req,res)=>{
    const BODY = req.body;
    try {
       const data =  await update_req("/update/userBio", BODY);
       console.log(data)
        res.status(201).json({success:data.success});
    } catch (err) {
        res.status(400)
    }
}


module.exports = {update_user_bio}