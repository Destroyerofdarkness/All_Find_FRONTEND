const form = document.querySelector("#updateBio");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const bioText = form.userBio.value;
    const user = form.userName.value
    const res = await fetch("/update/userBio", {
        method: "PUT",
        body: JSON.stringify({bioText, user}),
        headers: {"Content-Type": "application/json"}
    })

    const data = await res.json();

    if(data.success){
        window.alert("Succesfully Updated The User Bio")
        window.location.reload();
    }

})