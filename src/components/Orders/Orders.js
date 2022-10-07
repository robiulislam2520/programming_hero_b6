import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './order.css';

const Orders = () => {
  const {products, initialCart} = useLoaderData();
  console.log(initialCart)
  return (
    <div className='order-products container'>
      {
        initialCart.map(pd => {
          return <div key={pd.id} className>
          <div className="flex">
            <div>
              <img src={pd.img} alt={pd.name} />
            </div>
            <div>
              <h3>Qty: {pd.quantity}</h3>
            </div>
          </div>
        </div>
        })
      }
    </div>
  )
}

export default Orders