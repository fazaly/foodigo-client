import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google & Github Provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Create user for email & password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email & password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign In
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Github Sign In
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // logout 
    const logOut = () => {
        return signOut(auth);
    }

    // User state changed by onAuthStateChanged
    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;