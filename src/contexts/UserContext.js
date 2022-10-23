import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

// get auth
const auth = getAuth(app);


const UserContext = ({children}) => {

    // User Initial state
    const [user, setUser] = useState(null);
    // Loading initial state
    const [isLoading, setIsLoading] = useState(true);


    // sing in with google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Register a user with email and password
    const createUser = (email, password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login with email and password
    const login = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update user profile
    const updateUser = (profile) =>{
        setIsLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    // Observe the user
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setIsLoading(false)
        })
        return () => unsubscribe();
    },[isLoading])

    // Sign out user
    const logOut = () =>{
        setIsLoading(true)
        return signOut(auth);
    }



    // Auth needed file export 
    const authInfo = {
        user,
        setUser,
        login,
        isLoading,
        updateUser,
        signInWithGoogle,
        createUser,
        logOut
    };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default UserContext;