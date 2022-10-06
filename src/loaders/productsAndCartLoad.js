import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () =>{
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get stored cart data
    const savedCart = getStoredCart();
    const initialCart = [];
    for(const id in savedCart){
        const addedCart = products.find(product => product.id === id);
        if(addedCart){
            const qty = savedCart[id];
            addedCart.quantity = qty;
        }
        console.log(addedCart)
    }

    return {products, initialCart};
}