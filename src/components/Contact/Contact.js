import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://enigmatic-dusk-23207.herokuapp.com/information',data)
        .then(res=> {
            console.log(res)
            if(res.data.insertedId){
                alert('information is added')
                reset();
            }
        });
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <h1 className="text-success">CONTACT US AS SOON AS POSSIBLE</h1>
                    </div>
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <form className="from" onSubmit={handleSubmit(onSubmit)}>
                            <input className="w-25 mb-3" {...register("firstName")} placeholder="First Name"/> <br />
                            <input className="w-25 mb-3" {...register("LastName")} placeholder="Last Name" /> <br />
                            <input className="w-25 mb-3" {...register("phone")} placeholder="Phone Number"/> <br />
                            <input className="w-25 mb-3" {...register("Address")} placeholder="Address" /> <br />
                            <select className="w-25 py-2 mb-3" {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select> <br />
                            <input className="w-25 bg-success text-white py-2 mb-3" type="submit" />
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;