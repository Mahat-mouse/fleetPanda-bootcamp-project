function validateForm(event) {
  event.preventDefault()
  var fname = document.getElementById("fname").value;

  var contactNo = document.getElementById("contactNo").value;

  var address = document.getElementById("address").value;

  var email = document.getElementById("email").value;

  if (fname == "" || contactNo == "" || address == "" || email == "") {
    alert("All details must be filled out!!");
    return false;
  } else return true;
}
