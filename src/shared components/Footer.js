import React, { useEffect, useState } from 'react';
import './Footer.css'

const Footer = () => {
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
    // console.log(123);
    return (
        <div className='footer mt-12'>
           <p className=' w-24 mx-auto'> copyright©{date}bySabit</p>
        </div>
    );
};

export default Footer;