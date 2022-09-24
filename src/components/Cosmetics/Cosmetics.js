import React, { useEffect, useState } from 'react';
import Cosmetic from './Cosmetic';

export default function Cosmetics() {
    const [cosmetics,setCosmetics] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
        .catch(err => console.log(err.message))
    }, [])

  return (
    <>
        <h1>Calculate all things</h1>
        <div className='grid'>
        {
            cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}/>)
        }
        </div>
    </>
  )
}
