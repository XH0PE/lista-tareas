const tarea = document.getElementById("task");
const lista = document.querySelector(".lists");

function clicked(){
    if(tarea.value===""){
        alert("La tarea no debe estar vacia")
    }else{
        let li = document.createElement("li");
        li.innerHTML = tarea.value;
        lista.appendChild(li);
        tarea.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    guardar();
}

lista.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("correcto");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    guardar();
})

document.addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        clicked()
    }
})

function guardar(){
    localStorage.setItem("data",lista.innerHTML);
}

function getData(){
    lista.innerHTML = localStorage.getItem("data");
}

getData();