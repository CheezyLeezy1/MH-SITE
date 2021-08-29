function showhide(div_id){var div=document.getElementById(div_id);div.classList.toggle('hidden')}
const form=document.getElementById("myForm")
const usersname=document.getElementById("name")
const studentNum=document.getElementById("studNum")
const email=document.getElementById("e-mail")
const phone=document.getElementById("number")
form.addEventListener("submit",(e)=>{e.preventDefault();checkInputs()});function checkInputs(){if(usersname.value.trim()===""||usersname.value.trim()==null){alert("Name is Required - Please Try Again")}
if(usersname.length<=2){alert("Too Short")}
if(studentNum.value.trim()===""){alert("StudentNumber invalid")}
if(studentNum.length!==9){alert("StudentNumber too short.")}
if(email.value.trim()===""){alert("email cannot be empty")}else{if(isEmailValid(email.value.trim())){alert("email is not valid")}}
if(!/^[0-9]+$/.test(number)){alert("invalid number input")}}
function isEmailValid(email){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.text(email)}

  


