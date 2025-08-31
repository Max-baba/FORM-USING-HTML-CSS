const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener ("click",function(event){
event.preventDefault();

// Change inputs border Color to blue
email.style.borderColor ="blue";
username.style.borderColor ="blue";
password.style.borderColor ="blue";

// Change button background to green
submitbtn.style.backgroundColor ="green";

})
