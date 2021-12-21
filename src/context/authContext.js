import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../helpers/firebase"
import { setPersistence, browserSessionPersistence } from "firebase/auth";
export const UserContext = createContext();

export const useAuth = () => {
    return useContext(UserContext);
}

export const UserContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState();


    const signInGoogle = async () => {
        await setPersistence(auth, browserSessionPersistence)
            .then(() => {
                return auth.signInWithPopup(provider);
            })
            .catch((error) => {
                console.log(error.message)
            });


    }

    const logout = async () => {
        return await auth.signOut();

    }


    const value = {
        currentUser,
        signInGoogle,
        logout
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);

        })
        return unsubscribe;
    }, [currentUser])


    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}