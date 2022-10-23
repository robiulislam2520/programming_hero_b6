import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoutes = ({children}) => {
    const {user , isLoading} = useContext(AuthContext);

    // User location
    const location = useLocation();

    if(isLoading){
        return <h2 className='text-3xl text-center text-teal-500 mt-12'>Loading...</h2>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace/>
    }
    
    return children;
}

export default PrivateRoutes