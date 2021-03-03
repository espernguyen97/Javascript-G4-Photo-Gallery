function validate() {
  // Create array of information to check

  let input = new Array();
  input[0] = document.getElementById("fname").value;
  input[1] = document.getElementById("lname").value;
  input[2] = document.getElementById("phone").value;
  input[3] = document.getElementById("email").value;
  input[4] = document.getElementById("subject").value;

  // Error messages to display based on information entered

  let errMsg = new Array();
  errMsg[0] = "Please enter a valid first name";
  errMsg[1] = "Please enter a valid last name";
  errMsg[2] = "Please enter a valid phone number";
  errMsg[3] = "Please enter a valid e-mail address";
  errMsg[4] = "Please enter a comment";

  let errId = new Array();
  errId[0] = "errFname";
  errId[1] = "errLname";
  errId[2] = "errPnumber";
  errId[3] = "errEmail";
  errId[4] = "errComment";

  // Loop through input to check values

  for (i = 0; i < input.length; i++) {
    // Display error message for blank values
    if (input[i] == "") {
      document.getElementById(errId[i]).innerHTML = errMsg[i];
    }
    // Check phone number validation
    else if (i == 2) {
      let validPhone = /^\d{10}$/;
      if (input[2].match(validPhone)) {
        document.getElementById(errId[2]).innerHTML = "";
      } else {
        document.getElementById(errId[2]).innerHTML = errMsg[2];
      }
    }
    // Check if e-mail is correct
    else if (i == 3) {
      let validMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})$/;
      if (input[3].match(validMail)) {
        document.getElementById(errId[3]).innerHTML = "";
      } else {
        document.getElementById(errId[3]).innerHTML = errMsg[3];
      }
    }
    // Display no error if value is filled in
    else {
      document.getElementById(errId[i]).innerHTML = "";
    }
  }
}
