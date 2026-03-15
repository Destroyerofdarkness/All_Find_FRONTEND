const post_req= async(PATH, BODY)=>{

    const res = await fetch(`${process.env.API}${PATH}`,{
        method: "POST",
        body:   JSON.stringify({BODY}),
        headers: {"Content-Type": "application/json"}
    })

    const data = res.json()
    return data;
} 

module.exports = {post_req}