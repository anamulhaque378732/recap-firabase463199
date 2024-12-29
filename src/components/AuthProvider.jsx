import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
export const authContext = createContext(null);



const AuthProvider = ({ children }) => {

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .then(error => {
                console.log(error.message);

            })


    };

    const loginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            }).then(error => {
                console.log(error.message);

            })
    }

    const authInfo = {
        registerUser,
        loginUser,
    }


    return (
        <div>
            <authContext.Provider value={authInfo}> {children}</authContext.Provider>
        </div>
    );
};

export default AuthProvider;