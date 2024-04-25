import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase';
export const AuthContext = createContext(null);
function AuthProvider({ children }) {


  const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth,email, password);
  }
  
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth,email, password);
  };
  
  const objInfo = {
    createUser,
    loginUser,
   
  };
  return (
    <AuthContext.Provider value={objInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
