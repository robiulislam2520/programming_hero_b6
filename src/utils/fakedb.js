// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

const addToDbArray = (cartLength, cart) =>{

    let totalPrice = 0;
    totalPrice = cart.reduce((prev, current) => {
        return prev + current.price;
    }, 0);

    let shoppingCart = {
        items: cartLength,
        totalPrice,
        grandTotal: totalPrice + 114 + 5
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    addToDbArray
};

