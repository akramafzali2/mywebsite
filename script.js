
// script.js
document.getElementById("login-form").addEventListener("submit", function(event){
  event.preventDefault(); 

     var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

  alert("شما موفقانه وارد فیسبوک شدید");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
);