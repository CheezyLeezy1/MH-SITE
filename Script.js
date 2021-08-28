function showhide(div_id) {
  var div = document.getElementById(div_id);
  div.classList.toggle('hidden'); 
   }



function validate(){
    let name = document.forms["myForm"]["Name"];
    let email = document.forms["myForm"]["E-mail"];
    let phone = document.forms["myForm"]["Phone"];
    let TA=document.forms["myForm"]["textarea"].value;

    if (name.value == "") {
      alert("Please enter a correct name.");
      username.focus();
      return false;
    }

    if (name.value.match == "0-9") {
      alert("please enter a correct name");
      name.focus();
      return false;
    }
    if (email.value.indexOf("@", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if (email.value.indexOf(".", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if (phone.value == "") {
      alert("Please enter a valid number.");
      phone.focus();
      return false;
    }
    if(phone.value.match==="/^\d{10}$/)") {
    alert("Please enter a valid number.");
    phone.focus();
    return false;
    }
    
    if(TA.value==""){
      alert("text area cannot be blank")
      TA.focus();
    return false;
      }
  
      
}

function reset(){
  document.getElementById("myForm").reset();
  alert("your form has been submitted");
}

