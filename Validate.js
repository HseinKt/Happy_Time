
const name = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeat_password = document.getElementById("password2");
const submit = document.getElementById("submit");
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const upperCase = /[A-Z]/
const Email_pattern=/[a-z0-9]+@[a-z0-9.-]+\.[a-z]{3,}$/


submit.addEventListener('click', (e) => {
    if (name.value == ""||username.value == ""||email.value == ""||password.value == ""||repeat_password.value == "") {
        alert("some of your data still empty. please ");
    }
    else if (password.value.length < 8 || repeat_password.value.length < 8) {
        alert("Password should contain 8 characters minimum"); 
    }
    else if (!specialChars.test(password.value) ) {
        alert("Password should contain at least one special character");
    }
    else if (!upperCase.test(password.value) ) {
        console.log("upperCase")
        alert("Password should contain at least one upper case letter");
    }
    else if (password.value != repeat_password.value){
        console.log(password.value)
        console.log(repeat_password.value)
        alert("Please make sure to repeat the same password");
    }
    else if (!Email_pattern.test(email.value)){
        alert("Please enter a valid email address.");
    }
    
})
