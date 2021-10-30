import { initializeApp } from "firebase/app";
import firebaseConfig from "./Fairebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;