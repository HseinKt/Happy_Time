
const next = document.getElementById("next")
const check = document.getElementById("check")
const string = document.getElementById("string")
const prime = document.getElementById("prime")


const isPrime = (n) => {
    if( n == 2 || n == 3) return true
    for( let i=2 ; i<n-1 ; i++){
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
    console.log(p)

    if( isPrime(p)){
        prime.innerHTML = "Prime"
    }
    else {
        prime.innerHTML = "Not_Prime"
    }
})

next.addEventListener("click",() => {
    location.replace("class.html")
})
