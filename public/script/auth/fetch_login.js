document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault()
    const form = document.querySelector("#login");
    const userError = document.querySelector(".user.error");
    const passError = document.querySelector(".pass.error");
    form.addEventListener("submit",async(e)=>{
        e.preventDefault()
        console.log("Test on login!!")
        const user = form.user.value
        const pass = form.pass.value
        userError.textContent = "";
        passError.textContent = "";
        
    const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({user, pass}),
        headers: {"Content-Type": "application/json"}
    })

    const data = await res.json()
    if(data.error){
        userError.textContent = data.error.user
        passError.textContent = data.error.pass
    }
    if(data.token){
        window.location.href = `/createCookie/${data.token}`
    }
    })
})