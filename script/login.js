document.addEventListener("DOMContentLoaded", function() {
  var loginSubmitBtn = document.getElementById('loginSubmitBtn');

  loginSubmitBtn.addEventListener("click", function(e){
    validateLoginForm(e)
  })
})

async function validateLoginForm(event) {
  // alert(event);
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  // console.log(useremail, userpass);

  const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let data = { email, password };

  let errors = {};

  if (!email) {
    errors['email'] = "Enter the email address.";
  } else if (!emailpattern.test(email)) {
    errors['email'] = "Please enter valid email.";
  }

  if (!password) {
    errors['password'] = "Enter your password.";
  }

  // document.getElementById("email").placeholder = "";
  // document.getElementById("password").placeholder = "";

  debugger;
  if (Object.keys(errors).length > 0) {
    if (errors.email) {
      document.getElementById("email").value = "";
      document.getElementById("email").placeholder = errors.email;
    }

    if (errors.password) {
      document.getElementById("password").value = "";
      document.getElementById("password").placeholder = errors.password;
    }
  } else {
    // alert(
    //   JSON.stringify({
    //     emailid: useremail,
    //     passwordfield: userpass,
    //   })
    // );
    document.querySelector("form.loginform").reset();

  //FOR API
  try {
    let response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    debugger;

    if(response.status !== 200){
      alert("unsuccessful login attempt")

      throw new Error("Login failed");
    }
    let loginData = await response.json();
    console.log(loginData.token);
    localStorage.setItem("loginToken", loginData.token);
    window.location.href = "../index.html";
  } catch (error) {
    debugger
    throw error;
  }
}}
