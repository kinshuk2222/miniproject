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
        var blob = new Blob([logged], {
            type: "text/plain;charset=utf-8"
           });
        
        window.location.href='https://zany-enigma-976r6gv4757q37q5v-5500.app.github.dev/project.html';
    }
    else{
        document.getElementById("user").value="";
        document.getElementById("pass").value="";
        alert("Incorrect Credentials");
    }
})