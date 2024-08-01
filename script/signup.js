function validateSignupForm(event) {
  event.preventDefault()
  const fname = document.getElementById("fname").value;

  const contactNo = document.getElementById("contactNo").value;

  const address = document.getElementById("address").value;

  const email = document.getElementById("email").value;

  if (fname == "" || contactNo == "" || address == "" || email == "") {
    alert("All details must be filled out!!");
    return false;
  }

  const isEmailValid = validateEmail(email)

  if (isEmailValid) return true
  else alert ("solve validation issues first")
}
function validateEmail(email) {
  let mailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.match(mailFormat)){
    return true
  }
  else {
    alert('Please enter valid email address!');
    return false
  }
}


