import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Service.css';

const Service = (props) => {
    const { user } = useAuth()
    const history = useHistory();

    const { name, url, price, _id, description } = props.service;
    const DC = description.slice(0, 100);

    const handleClick = () => {
        const uri = `/details/${_id}`
        history.push(uri);
    }

    const handleDelete = (id) => {
        if (user?.email) {
            const proceed = window.confirm("Are You sure You Want to Delete?")
            if (proceed) {
                const url = `https://enigmatic-dusk-23207.herokuapp.com/services/${id}`;
                fetch(url, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            alert('DELETED SUCCESSFULLY PLEASE RELOAD THIS PAGE')
                        }
                    })
            }
        }
        else {
            alert('Please Log In first')
        }
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <img src={url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2 className="card-title">{price}</h2>
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{DC}</p>
                                <button onClick={() => handleClick(_id)} className="btn btn-success m-2">BUY NOW</button>
                                <button onClick={() => handleDelete(_id)} className="btn btn-danger">DELETE NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;