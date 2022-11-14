import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);


    // create a user with email and password
    const registerUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In with Google Provider
    const googleProvider = new GoogleAuthProvider();
    const signInGoogle = () =>{
        setLoading(false);
        return signInWithPopup(auth, googleProvider)
    }

    // Sign In 
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUser = (name) =>{
        console.log(name)
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    // Observer a user
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    // log out user
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    // Forgot password reset link
    const forgotPassword = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }



    const authInfo = {
        user,
        setUser,
        loading,
        registerUser,
        logOut,
        login,
        updateUser,
        signInGoogle,
        forgotPassword
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider