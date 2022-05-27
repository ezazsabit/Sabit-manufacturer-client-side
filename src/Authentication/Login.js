import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import SocialAuth from './SocialAuth';


const Login = () => {
    // /---------------------------------------
    const emailRef = useRef('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);
    // -----------------------------------

    const handleUserSignIn=event=>
    {
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    // --------------------------------------------------
    const handleEmailBlur=event=>{
        setEmail(event.target.value);
        // console.log(event.target.value)
    }
    // -------------------------
    const handlePassBlur=event=>{
        setPassword(event.target.value);
        // console.log(event.target.value)
    }
    // -------------------------------
    let errorHandle;
      if(error){
          errorHandle=
          <div>
              <p className='text-secondary'>Error: {error?.message}</p>
          </div>
      }
    //   -----------------------------------Reset password
    const resetPass=async () => {
        const email=emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }

    // ------------handle protected route by user authentication
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate=useNavigate();
    if(user){
        navigate(from, { replace: true });
    }
    //------------for stay is the page while reload(not to go to log in page)
    if (loading) {
        return <p>Loading...</p>;
      }


    return (
        <div className='App LogIn'>
       <p className='mt-5 text-6xl text-secondary'>Please Log-in!!</p>
         <div className="mt-8 container w-50 mx-auto mb-5 ">
         <form onSubmit={handleUserSignIn}>
<Form.Group className="mb-3" controlId="formBasicEmail">
 <Form.Label>Email address</Form.Label>
 <Form.Control  onBlur={handleEmailBlur}  type="email" placeholder="Enter email" />
 {/* <Form.Text className="text-muted">
   We'll never share your email with anyone else.
 </Form.Text> */}
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
 <Form.Label>Password</Form.Label>
 <Form.Control onBlur={handlePassBlur}  type="password" placeholder="Password" />
</Form.Group>
{/* <p style={{color:'red'}}>{error?.message}</p> */}
<Button variant="warning" type="submit">
Log-In
</Button>
{errorHandle}
</form>
         </div>
         <p>New to Sabit-manufacture? <Link to='/register' className='text-decoration-none '> <span className='text-accent'>Please Register</span></Link></p>
         <p>Forget Password? <span  onClick={()=>resetPass()}className='text-decoration-none'> <span className='text-accent'>Reset Password</span></span></p>
       
       {/* <SocialAuth></SocialAuth>
       <ToastContainer /> */}
     
                 <ToastContainer />
                 <SocialAuth></SocialAuth>
     </div>
 );
};

export default Login;
    