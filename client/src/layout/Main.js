import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import {Toaster} from 'react-hot-toast';
import Header from '../components/Header';

const Main = () => {
  return (
    <>
        <Header/>
        <div className='container mx-auto'>
          <Outlet/>
          <Toaster position="top-center"/>
        </div>
        <Footer/>
    </>
  )
}

export default Main