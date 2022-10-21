import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Main = () => {
  return (
    <div>
        <Header/>
        <div className='container mx-auto'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Main