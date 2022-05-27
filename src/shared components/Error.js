import React from 'react';
import error from '../Images/error.jpg'

const Error = () => {
    return (
        <div  className='App h-screen'>
           <img className='w-2/4 mx-auto' src={error} alt="" /> 
        </div>
    );
};

export default Error;