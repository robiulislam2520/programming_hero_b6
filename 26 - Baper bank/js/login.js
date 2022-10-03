/**
 * 
 *  Login Page
 *  @return index.html
 * 
 * 
 */
 const email = "admin@gmail.com";
 const pass = "123456";
 
 // select the dom
 const emailFiled = document.getElementById("email"),
   passField = document.getElementById("password"),
   submitBtn = document.getElementById("submit");
 
 // functions
 function login() {
   if (emailFiled.value === email && passField.value === pass) {
     window.location.href = "index.html";
   } else {
     return alert("Please provide a valid user name & email");
   }
   emailFiled.value = "";
   passField.value = "";
 }
 submitBtn.addEventListener("click", login);
 