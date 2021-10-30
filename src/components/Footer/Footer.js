import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <div className="conatiner footer">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 list">
                        <h1>CONTACT US</h1>
                        <li>123 Second Street Fifth</li>
                        <li>Avenue,</li>
                        <li>Manhattan, New York</li>
                        <li>+987 654 3210</li>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 list">
                        <h1>ADDITIONAL LINKS</h1>
                        <li>Abot us</li>
                        <li>Trems and condition</li>
                        <li>Trems and condition</li>
                        <li>Privacy policy</li>
                    </div>
                    <div class=" text-center">
                    <p>&copy; 2021 All Right Reserved By Tour Plan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;