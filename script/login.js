import { handleRequest } from "./request.js";

document.addEventListener("DOMContentLoaded", function () {
  var loginSubmitBtn = document.getElementById("loginSubmitBtn");

  loginSubmitBtn.addEventListener("click", function (e) {
    validateLoginForm(e);
  });
});

async function validateLoginForm(event) {
  event.preventDefault();
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let data = { email, password };
  let errorExists = false;

  // Clear previous error messages
  emailError.innerText = "";
  passwordError.innerText = "";

  // Validate email
  if (!email) {
    emailError.innerText = "Please provide an email";
    errorExists = true;
  } else if (!emailPattern.test(email)) {
    emailError.innerText = "Please provide a valid email address";
    errorExists = true;
  }

  // Validate password
  if (!password) {
    passwordError.innerText = "Please provide your password";
    errorExists = true;
  }

  // Reset form only if no errors
  if (!errorExists) {
    try {
      let response = await handleRequest(
        "https://reqres.in/api/login",
        "POST",
        data
      );
      console.log(response)
      if(!response.success){
        alert("User not found !")
      }else {

        localStorage.setItem("loginToken", response.userToken);
        console.log(localStorage.getItem("loginToken"));
        window.location.href = "../index.html";
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}
