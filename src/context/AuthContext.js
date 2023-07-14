import { useContext, createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"; 
import {auth} from '../components/Firebase'

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user,setUser] = useState({});

  function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
  }

  function signIn(email,password){
    return signInWithEmailAndPassword(auth,email,password);
  }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
     signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        console.log('user',currentUser)
    }) 
    return () => {
        unsubscribe();
    }
  },[])

  return (
    <AuthContext.Provider value={{ googleSignIn ,logOut , user, signUp, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
