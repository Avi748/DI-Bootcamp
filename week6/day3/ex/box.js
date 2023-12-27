const box = document.getElementById("animate")
let pos = 0;

function myMove(){
    setInterval(function(){
        if(pos != 350){
        pos++
        box.style.left = pos+"px";
        }else{
            clearInterval(id);
        }
    },10)
}

document.querySelector("button").addEventListener("click", myMove);