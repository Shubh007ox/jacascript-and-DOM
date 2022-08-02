function Student(firstNAme,lastname,sex,roll_number,dob) {

    this.firstNAme = firstNAme

    this.lastname = lastname

    this.sex = sex

    this.roll_number = roll_number;

    this.dob = new Date(dob);

    this.getBirthYear = function() {

        return this.dob.getFullYear();

        

    }

    this.fullName = function() {

        return this.firstNAme + this.lastname;

    }



    

}

const student1 = new Student('shubham',' goswami', 'male', 45, '4-14-1998');

const student2 = new Student('gaurav',' jethliya', 'male', 33, '5-15-1999');



console.log(student1.firstNAme + student1.lastname);

console.log(student1.getBirthYear());

console.log(student1.fullName());



function Age(name,age) {

    this.name = name

    this.age = age



}

Age.prototype.eligiblility = function eligiblility(minimumage) {

    if (this.age > minimumage) {

        console.log(this.name+' is eligible');

    }else{

        console.log(this.name+'is not eligible');

    }



}





const student3 = new Age('shubham',23);

const student4 = new Age('gaurav',17);

student3.eligiblility(18);

student4.eligiblility(18);
