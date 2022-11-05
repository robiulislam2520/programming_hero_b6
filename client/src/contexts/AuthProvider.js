import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const updateUserProfile = (name) =>{
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user, 
        loading,
        createUser,
        login,
        updateUserProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;