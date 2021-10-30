import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Fairbase/Fairbase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const gooleProvider = new GoogleAuthProvider();
   
    const handleGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, gooleProvider)
        .then(result =>{
            setUser(result.user);
            setError('')
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(()=>setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=> setIsLoading(false))
    }

    useEffect(() => {
       const unsunscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
            else{
               setUser({}) 
            }
            setIsLoading(false)
          });
          return () => unsunscribed;
    },[]);

    return{
        user,
        error,
        isLoading,
        handleGoogle,
        logOut,
    }
}

export default useFirebase;