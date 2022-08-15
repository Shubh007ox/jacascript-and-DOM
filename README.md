let student = {age:23}
let student1 = {age:24}

let seeMyAge = function(){
    return this.age
}
console.log(seeMyAge.call(student,));
console.log(seeMyAge.apply(student1,));
bind1 = seeMyAge.bind(student)
console.log(bind1());

let student2 = function(age){
    console.log(age)
}
let student3 = function(age){
    console.log(`My age is ${age}`);
}

let findAge = student2.bind(this,26);
let findAge2 = student3.bind(this,30);
findAge();
findAge2();
