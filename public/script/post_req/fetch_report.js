const reportForm = document.querySelector("#newReport")


reportForm.addEventListener("submit", async(e)=>{
    e.preventDefault();

    const user = reportForm.user.value;
    const description = reportForm.description.value;
    const conName = reportForm.conName.value;
    const connection = reportForm.connection.value;
    const type = reportForm.type.value;

    const res = await fetch("/post/report", {
        method: "POST",
        body: JSON.stringify({user, description, conName, connection, type}),
        headers: {"Content-Type": "application/json"}
    });

    const data = await res.json();

    if(data.success){
        window.location.reload();
    }else{

    }
})