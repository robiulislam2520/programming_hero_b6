import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart';
import TShirt from '../components/TShirt';

const Home = () => {
  const tShirts = useLoaderData() || [];

  return (
    <section className='home-container'>
        <div className="t-shirt-container">
          {
            tShirts.map(tShirt => <TShirt key={tShirt._id} tshirt={tShirt}></TShirt>)
          }
        </div>
        <div className="cart-container">
          <Cart/>
        </div>
    </section>
  )
}

export default Home