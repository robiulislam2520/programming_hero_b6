const products = [
    {id:1,name: 'walton Phone', price: 19000},
    {id:2,name: 'iphone', price: 119000},
    {id:3,name: 'xiami phone not', price: 9000},
    {id:4,name: 'symphony phone', price: 9500},
    {id:5,name: 'dell laptop', price: 150000},
    {id:6,name: 'Phone one', price: 19000},
    {id:7,name: 'Samsung note 7', price: 19000},
    {id:8,name: 'Mac chip not cheap', price: 1908900},
]

/* for(let i = 0; i < products.length; i++){
    console.log(products[i])
} */

// Short hand of for loop

/* for(const product of products){
    console.log(product);
} */


// ------------- Searching Functionality

function matched(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}

const result = matched(products, 'lap');
console.log(result)