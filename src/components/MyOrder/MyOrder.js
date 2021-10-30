import React, { useState, useEffect } from 'react';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = "https://enigmatic-dusk-23207.herokuapp.com/order";
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handledelete = (id) => {
        const proceed = window.confirm("Are You sure You Want to Delete?")
        if (proceed) {
            const url = `https://enigmatic-dusk-23207.herokuapp.com/order/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('DELETED SUCCESSFULLY')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        orders.map(order => <ul>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <img src={order?.image} alt="" />
                                        <h4 className="text-primary">{order?.name}</h4>
                                        <h5 className="text-primary">{order?.email}</h5>
                                        <button className="btn btn-danger py-3" onClick={() => handledelete(order?._id)}>Cencel Order</button>
                                    </div>
                                </div>
                            </div>
                        </ul>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;