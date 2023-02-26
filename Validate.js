
const name = document.getElementById("name");
const username = document.getElementById("username").value;
const email = document.getElementById("email");
const password = document.getElementById("password").value;
const submit = document.getElementById("submit");

submit.addEventListener('click', () => {
    console.log(name.value);
    alert(email.value)
})
