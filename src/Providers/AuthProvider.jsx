import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
        const [user,setUser] = useState(null);
        const createUser = (email,password) => {
            return createUserWithEmailAndPassword(auth,email,password)
        }
        const signInUser = (email,password) => {
            return signInWithEmailAndPassword(auth,email,password)
        }
        useEffect(()=>{
           const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser)
                console.log('observing current user',currentUser);
            })
            return () => {
                unsubscribe()       
            }
        },[])
        const logOut = () => {
            return signOut(auth)
        }
        const authInfo = {
            user , 
            createUser , 
            signInUser ,
            logOut
        }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};