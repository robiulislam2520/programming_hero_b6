/* 
 1. Show the output: 1-50
 2. if the divisible by 3 then instead of number, show 'foo'
 3. if the divisible by 5 then instead of number, show 'bar'
 4. if the divisible by 3 and 5then instead of number, show 'foobar'

*/

for(let i = 1; i <= 50; i++){
    if(i % 3 ===0 && i % 5 ===0){
        console.log('foobar')
    }
    else if(i % 3 === 0){
        console.log('foo')
    }else if(i % 5 === 0){
        console.log('bar')
    } else{
        console.log(i)
    }
}