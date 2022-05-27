import React from 'react';
import { useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import google from './../Images/google.png'

const SocialAuth = () => {
    const [signInWithGoogle,user,  loading, error] = useSignInWithGoogle(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
   
    if (loading) {
       <p>Loading...</p>;
      }
    //   Error handle-------------------
      let errorHandle;
      if(error){
          errorHandle=
          <div>
              <p className='text-secondary'>Error: {error?.message}</p>
          </div>
      }
    //   -------------------------------------
      
    //   -------------Email verify by google popup and take to home page
      const emailVerify=async () => {
        await sendEmailVerification();
        alert('Sent email');
      }
      const navigate=useNavigate();
      if(user){
        navigate('/home');
    }
    //   -------------------
    return (
        <div> 
         <div className="flex items-center">
         <div style={{height:'1px'}} className='bg-primary w-2/4'></div>
         <p className='mt-2 px-2'>Or</p>
         <div style={{height:'1px'}} className='bg-primary w-2/4'></div>
           
          </div>
          {errorHandle}
        <button onClick={() => {signInWithGoogle();
        emailVerify()}} type="button" className="btn btn-primary lg:h-16 h-32 mt-5 mb-5 p-2 w-1/4">
            <img src={google} alt="" />
            Sign with Google</button>
            


        </div>
           
    );
};

export default SocialAuth;