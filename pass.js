function passwordvalid() {
  var a = document.getElementById("password").value;
  var b = document.getElementById("passwords").value;

  if (a == "") {
    document.getElementById("message").innerHTML = "please fill password";
    return false;
  }
  if (a.length < 5) {
    document.getElementById("message").innerHTML =
      "password should not be less than 5 character";
    return false;
  }
  if (a.length > 25) {
    document.getElementById("message").innerHTML =
      "password should not be greater than 25 character";
    return false;
  }

  if (a!=b){
      document.getElementById("messages").innerHTML="password does not match";
      return false;
  }
}
