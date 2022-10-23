import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);

    // User location
    const location = useLocation();

    // if(isLoading){
    //     return <h2 className='text-2xl'>Loading.....</h2>
    // }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace/>
    }
    
    return children;
}

export default PrivateRoutes