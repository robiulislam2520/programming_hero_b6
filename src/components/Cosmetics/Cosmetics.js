import React from 'react';
import { add, multiply } from '../../utils/calculate';

export default function Cosmetics() {
    const num1 = 55;
    const num2 = 125;
    const total = add(num1,num2);

  return (
    <>
        <h1>Calculate all things</h1>
        <h3>Total add number : {total}</h3>
        <h3>Multiply all number : {multiply(5,4)}</h3>
    </>
  )
}
