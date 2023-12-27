//part1
// setTimeout(function(){
//     alert("Hello World")
// },2000)

//part2
let id = setTimeout(function(){
    const div = document.getElementById("container")
    const p = document.createElement("p");
    const node = document.createTextNode("Hello World")
    p.appendChild(node)
    div.appendChild(p)
},5000);
console.log(div);

