import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const procced = window.confirm("Are You Sure You want to add This?")
        if (procced) {
            axios.post('https://enigmatic-dusk-23207.herokuapp.com/services', data)
                .then(res => {
                    console.log(res)
                    if (res.data.insertedId) {
                        alert('Your Service Will Added')
                        reset();
                    }
                });
        }
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <h2 className="text-success mb-2">ADD A SERVICE</h2>
                    </div>
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <form className="from" onSubmit={handleSubmit(onSubmit)}>
                            <input className="w-25 mb-3" {...register("name")} placeholder="Service Name" /> <br />
                            <input type="text" className="w-25 mb-3" {...register("price")} placeholder="Price" /> <br />
                            <input className="w-25 mb-3" {...register("url")} placeholder="image Url" /> <br />
                            <textarea className="w-25 mb-3" {...register("description")} placeholder="Description" /> <br />
                            <input className="w-25 bg-success text-white py-2 mb-3" type="submit" />
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;