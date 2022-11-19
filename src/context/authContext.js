import { Children, createContext,useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider  = ({Children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const login = () => {
       setCurrentUser({id:1, name:"John Doe", profilePic:"https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863"})
    }
    useEffect(()=>{
        localStorage.setItem("user", currentUser)
    },[currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login}}>{Children}</AuthContext.Provider>
    )
}