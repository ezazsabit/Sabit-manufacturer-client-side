import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import './Purchace.css'

const Purchace = () => {
    // ----------------------
    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://intense-brook-81804.herokuapp.com/tools/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [id, data]);
    // ---------------------------------------------user info from log-in

    const [user, loading] = useAuthState(auth);
    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }
    //   console.log(user)
    // .............................................handle quantity
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error,setError] =  useState(false)
   
    
    const handleQuantity=(event)=>{
        // console.log(event.target.value)
        let a=parseInt(event.target.value);
        console.log(a)
        console.log(a>data.AvailableQuantity)
      
        if(a<data.MinimumOrderQuantity || a>data.AvailableQuantity)
        {
               setError(true)
        }
        else setError(false)
        
    
    }
    let errorHandle;
    if(error){
        errorHandle=
        <div>
         <p className='text-lg text-red-700'>You have given wrong quantity.Please try again!!</p>
        </div>
    }
      

    //add item to database-----------------------------
    const addItemHandle=event=>{
        event.preventDefault();
        console.log(event);
        const email=user?.email;
        const item=data.Name;
        const address=event.target[0].value;
        const phone=event.target[1].value;
        const quantity=event.target[2].value;
        const order = {email,item,address,phone,quantity}
        console.log(order);
        //--------------------database
        fetch('https://intense-brook-81804.herokuapp.com/ordereditem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

            })
            alert("New User added successfully")
            event.target.reset()
    
    }
    //----------------------------------------------------------------------------------------------
   
    // console.log(typeof(data.AvailableQuantity))
    return (
        <div className='purchase'>
            <p className='mt-5 text-6xl text-secondary'>Purchase from here!!</p>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={data.picture} class="max-w-sm rounded-lg " />
                    <div>
                        <h1 class="text-5xl font-bold">{data.Name}</h1>
                        <p class="py-6">{data.Description}</p>
             =           {/* <p className='text-left'>{data.Description}</p> */}
                        <p className='text-left'><span className='text-lg text-primary'>Available Quantity:</span>{data.AvailableQuantity}</p>
                        <p className='text-left'><span className='text-lg text-primary'>Minimum Order Quantity:</span>{data.MinimumOrderQuantity}</p>
                        <p className='text-left'><span className='text-lg text-primary'>Price:</span>${data.Price}</p>
                        <p className='text-left'><span className='text-xl text-secondary'>Purchase as:</span>{user?.displayName || 'undefined'}</p>
                        <p className='text-left'><span className='text-xl text-secondary'>Purchase from:</span>{user?.email}</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <p className='mb-5 text-6xl text-secondary'>Purchase Now!!</p>
            <Form onSubmit={addItemHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="tel" placeholder="Phone no." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Quantity for purchase</Form.Label>
                    {/* <Form.Control value={data.MinimumOrderQuantity} onBlur={handleQuantity()} type="number" placeholder="Quantity" /> */}
                    <input defaultValue={data.MinimumOrderQuantity} onKeyUp={handleQuantity}  type="number" id="fname" name="fname" />
                </Form.Group>
               
                {errorHandle}
                

               
                <Button disabled={error===true} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Purchace;