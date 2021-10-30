import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Tourist Plan</Navbar.Brand>
                    <Nav className="head">
                    <Link to="/home">Home</Link>
                    <Link to="/services">service</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    {user?.email ? <Link to="/myOrder">My Orders</Link> : ''}
                    {user?.email ? <Link to="/addService">Add a Service</Link> : ''}
                    <span className="white">{user.displayName}</span>
                    {user?.email ?  
                        <button className="style-button" onClick={logOut}>LogOut </button> :
                    <Link to="/login">Login </Link>}
                    </Nav>
                    </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;