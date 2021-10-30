import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('https://enigmatic-dusk-23207.herokuapp.com/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Order is added successfuly')
                    reset();
                }
            })
    };


    const [service, setService] = useState([])
    const { id } = useParams()
    // const emailRef = useRef()
    useEffect(() => {
        const url = `https://enigmatic-dusk-23207.herokuapp.com/service/placeOrder/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleName = (e) => {
        const userName = e.target.value;
        let newName = { name: userName }
        if(service?.name === userName){
            setService(newName);
        }
        else{
            alert('Service Name Not Match')
            e.preventDefault();
        }
    }

    const handlePrice = (e) => {
        const userPrice = e.target.value;
        const newPrice = { price: userPrice }
        if(service?.price === userPrice){
            setService(newPrice);
        }
        else{
            alert('Price Not Match')
            e.preventDefault();
        }
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="text-success">Please Fill This From</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <form className="style" onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" {...register("name")} onChange={handleName} placeholder={service.name} /> <br />
                                <input type="email" {...register("email")} required placeholder="write Your email" /><br />
                                <input type="password" {...register("password")} required placeholder="password" /><br />
                                <input type="text" {...register("price")} onChange={handlePrice} placeholder={service.price} /><br />
                                <input type="file" {...register("image")} onChange={handlePrice} placeholder="chose Your Photo link" /><br />
                                <input type="number" {...register("phone")} placeholder="Phone Number" /><br /><br />
                                <input className="color" type="submit" value="CONFIRM" /><br />
                            </form>
                        </div>
                    </div>
                    <h3 className="text-danger">NOTE: <small>Fill 1st and 4th from what you see in input. OtherWise your order is not granted, Thank You</small> </h3>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;