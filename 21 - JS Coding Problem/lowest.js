const numbers = [85,35,15,65,-2,-8,10, -96]

const lowest = (numbers) =>{
    let lowest = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] < lowest){
            lowest = numbers[i]
        }
    }
    return lowest;
}

console.log(lowest(numbers))