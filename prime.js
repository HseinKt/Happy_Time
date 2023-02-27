
const next = document.getElementById("next")
const check = document.getElementById("check")
const string = document.getElementById("string")
const prime = document.getElementById("prime")


function isPrime(n) {
    for( const i=2 ; i<n-1 ; i++){
        if (n%i == 0){
            return false
            break
        }
        else {
            return true
        }
    }
}

check.addEventListener("click",() => {
    const p = parseInt(string.value, 10) 
    console.log(string.value)
    console.log(p)

    if( isPrime(p)){
        prime.innerHTML = "Prime"
    }
    else {
        prime.innerHTML = "Not_Prime"
    }
})

next.addEventListener("click",() => {
    location.replace("prime.html")
})

