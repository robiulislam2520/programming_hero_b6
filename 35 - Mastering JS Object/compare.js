/* const first = {a:2};
const second = {a:5}; */

// compare number
/* if(first === second){
    console.log('we are same'); 
} else {
    console.log('Opps! Please live me alone!')
}
 */

const first = {a:2, b: 5, d:5};
const second = {a:5, b: 3, d:8};

function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                console.log('Opps! Please live me alone!'); 
            }
        }
        return console.log('we are same'); 
    } else{
        console.log('Opps! Please live me alone!')
    }
}

console.log(compareObject(first, second));