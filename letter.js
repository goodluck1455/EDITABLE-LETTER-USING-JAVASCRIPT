
function nameAdd(){
let name = prompt("Please input your name to be the writer of the letter");
document.getElementById("get").innerHTML = ( "" +name);
let myText = " You are welcome to this page with an editable letter using JS. This is my project on how i can use JS to manipulate HTML document.";

document.getElementById("d-mark").innerHTML = name + myText;

if(name != ""){
 alert("Congratulation " +name + " you are now the writer of the letter");

}
 else{
   alert("Please input your name next time to be the writer of the letter ");

 }

}

nameAdd();

function addValue(){
var uname = document.getElementById("box1").value;
var school = document.getElementById("box2").value;
var year = document.getElementById("box3").value;
var primaryShool = document.getElementById("box4").value;
var select = document.getElementById("myState");

document.getElementById("lbuser").innerHTML = "" +(uname);
document.getElementById("t2").innerHTML = school;
document.getElementById("t5").innerHTML = school;
document.getElementById("t1").innerHTML = year;
document.getElementById("t6").innerHTML = primaryShool;
document.getElementById("t7").innerHTML = select.options[select.selectedIndex].value;
}

let slideBtn = document.querySelector(".slide button");
let myForm = document.querySelector(".form");

let myCloseBtn = document.querySelector(".d-closeBtn");

slideBtn.addEventListener("click", () => {
 
  myForm.classList.toggle("open");
  return 
});


/*
function printContent(el){
  let restorpage = document.body.innerHTML;
  let printText = document.getElementById(el).innerHTML;
  document.body.innerHTML = printText;
  window.print();
  document.body.innerHTML = restorpage;
  return restorpage;
}  */