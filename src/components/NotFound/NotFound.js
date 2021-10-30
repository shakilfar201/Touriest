import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col-lg-12 notfound">
                    <h1 className="text-danger">404</h1>
                    <h4 className="text-info">Page Not Found</h4>
                </div>
            </div>
            </div>
        </div>
    );
};

export default NotFound;