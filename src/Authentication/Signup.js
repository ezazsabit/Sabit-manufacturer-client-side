

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

import SocialAuth from './SocialAuth';

const Signup = () => {
  // -------------name collect
  const [name, setName] = useState();

  const handleNameBlur = event => {
    setName(event.target.value);
    console.log(event.target.value)
  }

  // ----------email collect
  const [email, setEmail] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value);
    console.log(event.target.value)
  }

  // -----------pass collect
  const [password, setPassword] = useState('');

  const handlePassBlur = event => {
    setPassword(event.target.value);
    console.log(event.target.value)
  }
  //---------------------------------
  const [
    createUserWithEmailAndPassword,
    user


  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const myuser = { name, email }
  console.log("my user", myuser)

  const navigate = useNavigate();
  if (user) {
    navigate('/home')
  }
  // fetching post


  // ------------------------create user
  const handleCreateUser = event => {
    event.preventDefault();

    alert('creating user!!!')

    createUserWithEmailAndPassword(email, password);
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myuser),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
  }

  return (
    <div>
      <p className='mt-5 text-6xl text-secondary'>Please Register!!</p>
      {/* ----------------react hook form--------------- */}
      {/* 
             const { register, handleSubmit } = useForm();
            const onSubmit = data => console.log(data);
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <input type="submit" />
            </form> */}
      {/* ---------------------------------------------- */}




      <div className='App'>

        <div className="container w-50 mx-auto mb-5">

          <form onSubmit={handleCreateUser} action="">

            <Form.Group className=" mt-8 mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control required onBlur={handleNameBlur} type="text" placeholder="Enter full name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required onBlur={handleEmailBlur} type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required onBlur={handlePassBlur} type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control required onBlur={handleConfirmPassBlur} type="password" placeholder="Confirm Password" />
  </Form.Group> */}
            {/* <p style={{color:'red'}}>{error}</p> */}
            <Button type="submit" variant="warning" >
              Sign-Up
            </Button>
          </form>

        </div>
        <p>Already have an account? <Link to='/login' className='text-decoration-none'> <span className='text-primary'>Please Log-in</span></Link></p>

        <SocialAuth></SocialAuth>
      </div>
    </div>
  );
};

export default Signup;