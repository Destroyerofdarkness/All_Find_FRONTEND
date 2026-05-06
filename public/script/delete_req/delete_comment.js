
document.addEventListener("click",async function(e){
    if(e.target.classList.contains("comDelete")){
        e.preventDefault()
        

        const loggedIn = document.querySelector("#username").value
        console.log("Logged In User: ", loggedIn)
        const id = e.target.dataset.id
        const user = e.target.dataset.user
        if(user === loggedIn){
            console.log("Correct User!!")
        
        const res = await fetch("/delete/comment",{
            method: "DELETE",
            body: JSON.stringify({id}),
            headers: {"Content-Type":"application/json"}
        })

        const {success} = await res.json();

        if(success){
            window.location.reload()
        }else{
            window.alert("Unable to delete the comment!!")
        }
    }else{
        window.alert("Unathorized request!!")
    }
    }
})