import React from 'react';
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import Service from '../../components/Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima maiores illo fugiat numquam odit impedit natus dolor qui adipisci accusamus!",
            image: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima maiores illo fugiat numquam odit impedit natus dolor qui adipisci accusamus!",
            image: cavity
        },
        {
            id: 3,
            name: 'Fluoride Treatment',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima maiores illo fugiat numquam odit impedit natus dolor qui adipisci accusamus!",
            image: whitening
        }
    ]
  return (
    <div className='text-center py-20'>
        <h2 className='text-2xl font-bold text-[#19D3AE] uppercase'>Our services</h2>
        <h3 className='font-semibold text-3xl text-[#3A4256]'>Services We Provide</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {
                serviceData.map(service => <Service key={service.id} service={service}/>)
            }
        </div>
    </div>
  )
}

export default Services