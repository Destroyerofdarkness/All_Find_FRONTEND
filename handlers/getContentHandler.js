

const get_games_and_anime = async()=>{

    const res = await fetch("http://localhost:4000/getAllContent",{
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })

    const data = res.json()
    return data;
} 

module.exports = {get_games_and_anime}