let colors=["red","green","blue","yellow","black"];
const color=document.querySelector(".color");
const body=document.querySelector("body");
const active1=document.querySelector("#right");

console.log(active1);
function change(){
let randomnum=randomnumber();
//console.log(randomnum);
body.style.background=colors[randomnum];
color.textContent=colors[randomnum];
color.style.color=colors[randomnum];

}
function randomnumber(){
    return Math.floor(Math.random()*colors.length);
}
