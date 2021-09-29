
function loginn(e){
e.preventDefault();

//console.log(my_data[0].email,my_data[0].pass);

let email=document.getElementById("email").value 
let pass=document.getElementById("password").value 
let my_data=JSON.parse(localStorage.getItem("sign_data"));

for(let i=0; i<my_data.length; i++){
  var bool=false;
  let email1=my_data[i].email 
  let pass1=my_data[i].pass; 

if(email==email1 && pass==pass1){
    console.log("vaani")
bool=true;
alert("login successful")
window.location.href="./home.html";
}
 }
 if(bool==false){
     alert("invalid credential")
 }
}
//loginn();