import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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

    // Register a user with email and password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login with email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update user profile
    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    // Observe the user
    useEffect(() =>{
        setIsLoading(false)
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () => unsubscribe();
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