
//login
if (localStorage.getItem("loginToken")) {
  document.querySelector("#login").style.display = "none";
  document.querySelector("#signup").style.display = "none";
  document.querySelector("#logout").style.display = "block";
  document.querySelector("#blog").style.display="block";
} else {
  document.querySelector("#login").style.display = "block";
  document.querySelector("#signup").style.display = "block";
  document.querySelector("#logout").style.display = "none";
  document.querySelector("#blog").style.display="none";
}
document.querySelector("#logout").addEventListener('click',function(){
    localStorage.clear();
    location.reload();
});

let log = document.getElementById("login");
console.log(log);
log.addEventListener("click", log);
function login() {
  window.location = "app/login.html";
}

//signin
let sign = document.getElementById("signup");
console.log(sign);
sign.addEventListener("click", sign);
function signin() {
  window.location = "app/signup.html";
}


