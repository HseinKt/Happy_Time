const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const course = document.getElementById("course");
const courseNbr = document.getElementById("courseNbr");
const submit = document.getElementById("submit");
const next = document.getElementById("next");

console.log(course)

class Course {
    constructor(name,lastName,email,course,courseNbr){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.course = course;
        this.courseNbr = courseNbr;
    }
    greet() {
        alert(`Hello my name is ${this.name} ${this.lastName}, this is my email ${this.email} I am taking a ${this.course} course : ${this.courseNbr} `);
    }
}

submit.addEventListener('click',() => {
    const N = name.value
    const LN = lastName.value
    const E = email.value
    const C = course.value
    const CN = courseNbr.value
    const c1 = new Course(N,LN,E,C,CN)
    c1.greet()
})

next.addEventListener("click",() => {
    location.replace("class.html")
})
