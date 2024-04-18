const element = document.getElementById("BUTTON");

var userpass = {
    'kinshukthapa23@gmail.com':'password'
};
var logged;

element.addEventListener("click",function(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    console.log(username);
    console.log(password);
    if (userpass[username]==password){
        alert("Login Successful.")
        logged=username;
        console.log(logged);
        window.location.replace='project.html';
    }
    else{
        document.getElementById("user").value="";
        document.getElementById("pass").value="";
        alert("Incorrect Credentials");
    }
})