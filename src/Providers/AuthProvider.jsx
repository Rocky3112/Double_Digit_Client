/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";


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

const googleProvider = new GoogleAuthProvider();
const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}
//observe auth change
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, currentUser =>{
        console.log('auth state change', currentUser)
      


        //get & set token
        if(currentUser){
            axios.post('http://localhost:5000/jwt', {
            email: currentUser.email})
          .then(data=>{
            console.log(data.data.token);
            localStorage.setItem('access_token', data.data.token)
          })
        }
        else{
            localStorage.removeItem('access-token')
        }
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
    updateUserProfile,
    googleSignIn
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;