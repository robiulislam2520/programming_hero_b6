// forward for loop

// law - n*(n-1) / 2

/* let sum = 0;

for(let i = 0; i <= 10; i++){
    sum += i
}
console.log(sum) */


// backward for loop

/* let sum = 0;
for(let i = 100; i >= 1; i--){
    sum +=i
}
console.log(sum) */

/*-------------Lets talk recursion . who is call each though each-------------*/

function recursion(i){
    if(i===1){
        return 1
    }
    return i * recursion(i-1)
}
const factorial = recursion(5);

console.log(factorial)