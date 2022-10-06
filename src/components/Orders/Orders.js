import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
  const {products, initialCart} = useLoaderData();
  console.log(initialCart)
  return (
    <div>Orders {products?.length}</div>
  )
}

export default Orders