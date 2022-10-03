// Using object literals
const obj = {
    name: 'Robiul Islam',
    age: 19,
    method: () =>{
        console.log('this.name')
    }
}

// console.log(obj);

// Class Constructor ES6
class Person{
    constructor(name, age,relationship){
        this.name = name;
        this.age = age;
        this.relationship = relationship
    }
}

const p1 = new Person('robiul',19,'In a relationship')
console.log(p1)

/* --------- Creating object with Object.create() method ------ */

const p2 = Object.create(null);

