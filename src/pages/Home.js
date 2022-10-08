import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart';
import TShirt from '../components/TShirt';

const Home = () => {
  const tShirts = useLoaderData() || [];
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) =>{
    const exits = cart.find(ts => ts._id === tshirt._id);
    if(exits){
      alert('Already Added');
      return
    }
    const newCart = [...cart, tshirt];
    setCart(newCart);
  }

  const handleRemove = id => {
    const remaings = cart.filter(ts => ts._id !== id);
    setCart(remaings)
  }

  return (
    <section className='home-container'>
        <div className="t-shirt-container">
          {
            tShirts.map(tShirt => <TShirt key={tShirt._id} tshirt={tShirt} handleAddToCart={handleAddToCart}></TShirt>)
          }
        </div>
        <div className="cart-container">
          <Cart cart={cart} handleRemove={handleRemove}/>
        </div>
    </section>
  )
}

export default Home