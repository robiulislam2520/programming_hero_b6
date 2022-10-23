import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

// get auth
const auth = getAuth(app);


const UserContext = ({children}) => {

    // User Initial state
    const [user, setUser] = useState({});
    // Loading initial state
    const [isLoading, setIsLoading] = useState(true);


    // sing in with google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        setIsLoading(false);
        return signInWithPopup(auth, googleProvider)
    }

    // Observe the user
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe();              
        }
    },[])

    // Sign out user
    const logOut = () =>{
        setIsLoading(false)
        return signOut(auth);
    }



    // Auth needed file export 
    const authInfo = {
        user,
        setUser,
        isLoading,
        signInWithGoogle,
        logOut
    };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default UserContext;