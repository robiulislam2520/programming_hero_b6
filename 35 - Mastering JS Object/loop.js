const table = {color: 'Ash', price: 500, isCleaned: false};

// all keys
const keys = Object.keys(table);
// all values
const values = Object.values(table);

/* -------------- for...in loop in object -------------------- */
for(const key in table){
    
    // console.log(key, table[key]);
}

/* ---------------- advanced object destructuring --------------------- */
const pair = Object.entries(table)
for(const [key, value] of pair){
    console.log(key, value)
}