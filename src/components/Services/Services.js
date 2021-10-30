import React,{useState,useEffect} from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        const url = "https://enigmatic-dusk-23207.herokuapp.com/services";
        fetch(url)
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="service-container">
                    {
                        services.map(service => <Service key={service._id} service={service}> </Service>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;