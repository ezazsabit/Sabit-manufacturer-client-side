import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../Images/Banner image/banner1.jpg'
import banner2 from '../../Images/Banner image/banner2.jpg'
import banner3 from '../../Images/Banner image/banner3.jpg'
import banner4 from '../../Images/Banner image/banner4.jpg'
import banner5 from '../../Images/Banner image/banner5.jpg'
import banner6 from '../../Images/Banner image/banner6.jpg'
import banner7 from '../../Images/Banner image/banner7.jpeg'

const Tools = () => {
    return (
        <div>
           <p className='mt-5 text-6xl text-secondary'>Our Product</p>
            <div className='mt-14  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-3 '>
           
           <div class="card card-compact max-w-96  bg-base-100 shadow-xl mb-5">
 <figure><img src={banner1}  alt="Shoes" /></figure>
 <div class="card-body">
   <h2 class="card-title">Measuring Tap</h2>
   <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>
   <p className='text-left'><span className='text-lg'>Available Quantity:</span>10,000</p>
   <p className='text-left'><span className='text-lg'>Minimum Order Quantity:</span>100</p>
   <p className='text-left'><span className='text-lg'>Price:</span>$75</p>
   <div class="card-actions justify-end">
   <Link to='/purchase' className='mx-auto btn btn-primary'>Purchase Now</Link>
   </div>
 </div>
 
 
</div>
<div class="card card-compact max-w-96  bg-base-100 shadow-xl mb-5">
 <figure><img src={banner4}  alt="Shoes" /></figure>
 <div class="card-body">
   <h2 class="card-title">Tool Box</h2>
   <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>
   <p className='text-left'><span className='text-lg'>Available Quantity:</span>12,500</p>
   <p className='text-left'><span className='text-lg'>Minimum Order Quantity:</span>100</p>
   <p className='text-left'><span className='text-lg'>Price:</span>$575</p>
   <div class="card-actions justify-end">
   <Link to='/purchase' className='mx-auto btn btn-primary'>Purchase Now</Link>
   </div>
 </div>
 
 
</div>
<div class="card card-compact max-w-96  bg-base-100 shadow-xl mb-5">
 <figure><img src={banner7}  alt="Shoes" /></figure>
 <div class="card-body">
   <h2 class="card-title">Metal Cutter</h2>
   <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>
   <p className='text-left'><span className='text-lg'>Available Quantity:</span>8,000</p>
   <p className='text-left'><span className='text-lg'>Minimum Order Quantity:</span>100</p>
   <p className='text-left'><span className='text-lg'>Price:</span>$250</p>
   <div class="card-actions justify-end">
     
     <Link to='/purchase' className='mx-auto btn btn-primary'>Purchase Now</Link>
   </div>
 </div>
 
 
</div>



       </div>
       </div>
    );
};

export default Tools;