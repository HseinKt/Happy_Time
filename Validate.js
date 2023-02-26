
const name = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeat_password = document.getElementById("password2");
const submit = document.getElementById("submit");
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const upperCase = /[A-Z]/;
const Email_pattern=/[a-z0-9]+@[a-z0-9.-]+\.[a-z]{3,}$/;
const smallBox = document.getElementById("smallBox");

function merge_Arrays(left_sub_array, right_sub_array) {
    let array = []
    while (left_sub_array.length && right_sub_array.length) {
       if (left_sub_array[0] < right_sub_array[0]) {
          array.push(left_sub_array.shift())
       } else {
          array.push(right_sub_array.shift())
       }
    }
    return [ ...array, ...left_sub_array, ...right_sub_array ]
}

function merge_sort(Array) {
    const middle_index = Array.length / 2
    if(Array.length < 2) {
       return Array
    }
    const left_sub_array = Array.splice(0, middle_index)
    return merge_Arrays(merge_sort(left_sub_array),merge_sort(Array))
}

submit.addEventListener('click', (e) => {
    const obj={
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value
    }

    //use the JSON.stringify() method to convert the JavaScript object to JSON format.
    const data = JSON.stringify(obj)
    console.log(data)

    if (name.value == ""||username.value == ""||email.value == ""||password.value == ""||repeat_password.value == "") {
        alert("some of your data still empty. please ");
    }
    else if (password.value.length < 8) {
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
    else {
        //location.replace("mergeSort.html")
        var Val = prompt("please add 10 numbers  : ", "39 28 44 4 10 83 11");
        var Array = Val.split(" ").map(function(item) {
            return parseInt(item, 10);
        });

        console.log("You entered : " + merge_sort(Array));
    }
})



