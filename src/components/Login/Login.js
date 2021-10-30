import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {handleGoogle,error, user} = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || '/details/:id'
    return (
        <div>
            <div className="container">
                <div className="row login">
                    <div className="col-lg-12">
                        <h1 className="text-success"><small>Login</small></h1>
                        <button className="btn btn-primary text-white px-2 py-2" onClick={handleGoogle}>Continue as Google</button>
                        <h4>{error}</h4>
                        {
                            user?.email ? history.push(url) : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;