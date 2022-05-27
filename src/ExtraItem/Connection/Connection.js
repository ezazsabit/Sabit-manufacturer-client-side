import React from 'react';
import '../Connection/Connection.css'

const Connection = () => {
    const handleForm=()=>{
   
        alert('Thanks for your opinion')
    }
    return (
        <div className='App maIn' >
            <h2 className='text-warning'>Contact With Us!!!</h2>
            <p>Your Email:<input type="email" required placeholder='email' name="" id="" /></p>
            <p>Your Question:<input type="text" required placeholder='your question' name="" id="" /></p>
           <div className="d-flex justify-content-center align-items-center" > <p >Your Opinion:<textarea required type="text" name="" placeholder='opinion' id="" /></p></div>
             <button onClick={handleForm} type='submit' className='m-3 btn btn-warning'>Connect</button>
        </div>
    );
};

export default Connection;