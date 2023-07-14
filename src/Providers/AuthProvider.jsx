/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

const [user, setUser] =useState(null)
const [loading, setLoading]= useState(true)

const createUser =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut=()=>{
    return signOut(auth)
}

const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}
//observe auth change
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, currentUser =>{
        console.log('auth state change', currentUser)
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe();
    }
},[])

const authInfo ={
    user,
    createUser,
    loading,
    signIn,
    logOut,
    updateUserProfile
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;