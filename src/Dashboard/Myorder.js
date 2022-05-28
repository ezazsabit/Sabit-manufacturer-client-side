import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Myorder = () => {
    const [user, loading] = useAuthState(auth);
    const [data, setData] = useState([]);
    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }
    //----------------------------------------------------
   
    

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(`http://localhost:5000/ordereditem/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [data,user]);
    // console.log(data)

   //-------------------delete item or cancel item
   const handleDelete=(id)=>{
    console.log(id);
    const _id= {id};
    if (window.confirm("Are you sure?!")) {
      fetch(`http://localhost:5000/ordereditem/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(_id),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })

    } 
   
  }


    return (
        <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Item</th>
        <th>Quantity</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Control</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
          data.map((a,index)=>
            <tr>
            <th>{index+1}</th>
            <td>{a.item}</td>
            <td>{a.quantity}</td>
            <td>{a.phone}</td>
           
            <td>{a.address}</td>
            <td><button onClick={()=>handleDelete(a._id)} class="btn w-64 rounded-full">Cancel</button></td>
          </tr>

          )
      }
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myorder;