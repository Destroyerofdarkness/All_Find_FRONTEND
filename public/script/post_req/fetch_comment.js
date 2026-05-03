const form = document.querySelector("#newComment");

form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const user = form.user.value;
    const connection = form.connection.value;
    const content = form.comment.value;

    const res = await fetch("/post/comment", {
        method: "POST",
        body: JSON.stringify({user, connection, content}),
        headers: {"Content-Type": "application/json"}
    });

    const data = await res.json();

    if(data.success){
        window.location.reload();
    }else{
        window.location.reload();
    }
});