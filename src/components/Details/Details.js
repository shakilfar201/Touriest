import React, { useState, useEffect } from 'react';
import { Link, useParams,useHistory } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const [singledata, setSingleData] = useState([]);

    useEffect(() => {
        const url = `https://enigmatic-dusk-23207.herokuapp.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, []);

    
    const history = useHistory()
    const handlePlace = (_id) =>{
        const url = `/service/PlaceOrder/${_id}`
        history.push(url)
        
    }

    return (
        <div>
            <div className="container">
                <div className="card style">
                    <img src={singledata?.url} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{singledata?.description}</p>
                    </div>
                    <button onClick={()=>handlePlace(singledata?._id)} className="btn btn-primary">place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Details;