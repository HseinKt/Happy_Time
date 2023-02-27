
const next = document.getElementById("next")
const check = document.getElementById("check")
const string = document.getElementById("string")
const palindrom = document.getElementById("palindrom")


function isPalindrome(str) {
    if(str.length === 1) {
        return true;
    }
    else if(str.length === 2) {
        return str[0] === str[1];
    }
    else if(str[0] === str.slice(-1)) {
        return isPalindrome(str.slice(1,-1))
    }
    else {
        return false;
    }
}

check.addEventListener("click",() => {
    if( isPalindrome(string.value)){
        palindrom.innerHTML = "Palindrom"
    }
    else {
        palindrom.innerHTML = "Not_Palindrom"
    }
})

next.addEventListener("click",() => {
    location.replace("prime.html")
})

