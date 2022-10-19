import React, { createContext } from 'react';

const AuthContext = createContext()

const UseContext = ({children}) => {
    const user = {
        displayName: 'Robiul Islam'
    }
  return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
  )
}

export default UseContext