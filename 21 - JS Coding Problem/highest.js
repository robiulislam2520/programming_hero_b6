const numbers = [256,123,95,65,15,226,256,165]

function getMaxNum(numbers){
    let largest = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i]
        }
    }
    return largest;
}

const tallest = getMaxNum(numbers);
console.log('tallest number is ' , tallest);