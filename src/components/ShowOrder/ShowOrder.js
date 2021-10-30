// import React from 'react';

// const ShowOrder = (props) => {
//     const {name, email, _id} = props.order;

//     const handledelete = (id) =>{
//         const url = `https://enigmatic-dusk-23207.herokuapp.com/order/${id}`;
//         fetch(url,{
//             method: "DELETE"
//         })
//         .then(res=> res.json())
//         .then(data => {
//             if(data.deletedCount){
//                 alert('Are You sure you want to delete it')
//             }
//             console.log(data)
//         })
//     };

//     return (
//         <div>
//             <ul>
//                 <li><h4 className="text-primary">{name}</h4> <h5 className="text-primary">{email}</h5> <button className="btn btn-danger py-3" onClick={()=>handledelete(_id)}>Delete Order</button></li>  
//             </ul>
//         </div>
//     );
// };

// export default ShowOrder;