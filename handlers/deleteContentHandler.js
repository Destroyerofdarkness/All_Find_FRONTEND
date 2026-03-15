const delete_req = async(PATH, BODY)=>{

    const res = await fetch(`${process.env.API}${PATH}`,{
        method: "DELETE",
        body:   JSON.stringify({BODY}),
        headers: {"Content-Type": "application/json"}
    })

    const data = await res.json()
    return data;
}

module.exports = delete_req