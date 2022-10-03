const user = {id: 1, name:'Gariber Bandhu', job:'Placeman'};

// JavaScript Object Notation (JSON)

// convert obj to text
console.log(JSON.stringify(user))

// convert txt to obj
console.log(JSON.parse(JSON.stringify(user)))