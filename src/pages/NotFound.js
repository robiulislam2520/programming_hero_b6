import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

  return (
    <div className='container mx-auto h-[80vh] flex justify-center items-center'>
        <div className='w-1/2 mx-auto'>
            <h1 className="text-5xl font-bold text-blue-500 text-center">
               404 Page Not Found
            </h1>
            <div className='text-center mt-4'>
                <button 
                className="bg-green-500 py-2 px-4 rounded font-semibold text-white mr-3"
                onClick={() => window.history.back()}
                >
                    Go Back
                </button>
                <button 
                    className="bg-red-500 py-2 px-4 rounded font-semibold text-white ml-3"
                    onClick={() => navigate('/')}
                >
                    Home
                </button>
            </div>
        </div>
    </div>
  )
}

export default NotFound