import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({ToolItem}) => {
  const{_id}=ToolItem
    // console.log(ToolItem.picture);
    const navigate=useNavigate()
    const routedPath=()=>{
      navigate(`/purchase/${_id}`)
    }
    return (
        <div>
              <div class="card card-compact max-w-96  bg-base-100 shadow-xl mb-5">
 {/* <figure>{ToolItem.picture}</figure> */}
 <figure><img src={ToolItem.picture} alt="banner4" /></figure>
 <div class="card-body">
   <h2 class="card-title">{ToolItem.Name}</h2>
   <p className='text-left'>{ToolItem.Description}</p>
   <p className='text-left'><span className='text-lg'>Available Quantity:</span>{ToolItem.AvailableQuantity}</p>
   <p className='text-left'><span className='text-lg'>Minimum Order Quantity:</span>{ToolItem.MinimumOrderQuantity}</p>
   <p className='text-left'><span className='text-lg'>Price:</span>${ToolItem.Price}</p>
   <div class="card-actions justify-end">
   <button onClick={routedPath} className='mx-auto btn btn-primary'>Purchase Now</button>
   </div>
 </div>
 
 
</div>
        </div>
    );
};

export default Item;