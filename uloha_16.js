let date = document.getElementById("date")
function date_val() 
{

console.log(date.value)


// narodeniny su od teraz o 

let today = new Date();
let bday = new Date(document.getElementById("date").value); 
let age = today.getFullYear() - bday.getFullYear();

let upcomingBday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());

if(today > upcomingBday) {
upcomingBday.setFullYear(today.getFullYear() + 1);
}
var one_day = 24 * 60 * 60 * 1000;

let daysLeft = Math.ceil((upcomingBday.getTime() - today.getTime()) / (one_day));
document.getElementById("ul").innerHTML ="<li>"+ "narodeniny budu za :"+daysLeft +"dni" +"</li>"
console.log("narodeniny budu za :"+daysLeft +"dni")

//vypis mesiac narodenia 
let narodenie = new Date(date.value)
let mesiac_narodenia =narodenie.getMonth()
if
(mesiac_narodenia>=2&&mesiac_narodenia<=4)
{document.getElementById("ul").innerHTML+="<li>"+"narodil si sa na jar"+"</li>"
console.log("narodil si sa na jar")}
if
(mesiac_narodenia>=5&&mesiac_narodenia<=7)
{document.getElementById("ul").innerHTML+="<li>"+"narodil si sa na leto"+"</li>"
console.log("narodil si sa na leto")}
if
(mesiac_narodenia>=8&&mesiac_narodenia<=10)
{document.getElementById("ul").innerHTML+="<li>"+"narodil si sa na jesen"+"</li>"
console.log("narodil si sa na jesen")}
if
(mesiac_narodenia==11||mesiac_narodenia<=1)
{document.getElementById("ul").innerHTML+="<li>"+"narodil si sa v zime"+"</li>"
console.log("narodil si sa v zime")}
}