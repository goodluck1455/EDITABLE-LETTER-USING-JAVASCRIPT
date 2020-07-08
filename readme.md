# MY JAVASCRIPT PRACTICE.
This project is on how to creat an application letter using **Javascript** in which a user can edit the letter to it's on taste. Furthermore i want to creat it in such a way that the user can use a form to edit the letter by filling the form and when once he or she clicks the submit button then the changes will automatically take effect. And i also want a situation where the user can actually edit and the entire letter by clicking any part of the letter which the user wants to edit, this was archieved with the use of contentEditable. (this implemented in **HTML document** and not Javascript)

---

## PREVIEW.
---
The image below is the preview of how the web page looks like.

<img src="letter preview.jpg" width="100%"/>

---

I also created the page in such a way that the will be a *Prompt* asking the user to input his/her name to be the writer of the letter and once the a name is being inputed it will be written down at the bottom of the letter as the signatory to the letter. 

`````````javascript
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

`````````
## FUTURE EXPECTATION
I want to creat it in such a way that when a user clicks on a button a page will pop up for editing and after editing it then click on an ok button and then the changes will automatically reflect in the web page while the user print it and use it for it's own purpose. 

> **Your ideas are highly welome on how to make this possible. Thank you**.








