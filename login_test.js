const element = document.getElementById("BUTTON");
const fs = require("fs");
var userpass = {
    'kinshukthapa23@gmail.com':'password'
};

element.addEventListener("click",function(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    console.log(username);
    console.log(password);
    if (userpass[username]==password){
        alert("Login Successful.")
        fs.readFile('currentlyloggedin.txt', (err, data) => {if (err) throw err;
        console.log(data);});
    }
    else{
        document.getElementById("user").value="";
        document.getElementById("pass").value="";
        alert("Incorrect Credentials");
    }
})