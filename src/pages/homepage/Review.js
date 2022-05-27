import React from 'react';

const Review = () => {
    return (
        <div>
            <p className='mt-5 text-6xl text-secondary'>Our Reviews!!</p>
            <div className='max-w-80 mx-20 flex items-center ' >
                <div class="mt-5 avatar">
                    <div class="max-w-24 max-h-24   rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                   
                
                    
                
                    </div>
                  <div className='text-left h-24 lg:w-96   my-5'>
                  <p><span className="text-secondary">Name:</span> Samuel</p>
                  <p><span className="text-secondary">Ratings:</span> 4.5+</p>
                    <p><span className="text-secondary">Comment:</span> Their service is really good ans satisfactory</p>
                  </div>
                   
                </div>
            </div>
            <div className='max-w-80 mx-20 flex items-center ' >
                <div class="mt-5 avatar">
                    <div class="max-w-24 max-h-24   rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src="https://api.lorem.space/image/face?hash=28212" />
                   
                
                    
                
                    </div>
                  <div className='text-left h-24 lg:w-96   my-5'>
                  <p><span className="text-secondary">Name:</span> Samuel</p>
                  <p><span className="text-secondary">Ratings:</span> 5</p>
                    <p><span className="text-secondary">Comment:</span> I just love their service</p>
                  </div>
                   
                </div>
            </div>
            <div className='max-w-80 mx-20 flex items-center ' >
                <div class="mt-5 avatar">
                    <div class="max-w-24 max-h-24   rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src="https://api.lorem.space/image/face?hash=40361" />
                   
                
                    
                
                    </div>
                  <div className='text-left h-24 lg:w-96   my-5'>
                  <p><span className="text-secondary">Name:</span> Samuel</p>
                  <p><span className="text-secondary">Ratings:</span> 4.5+</p>
                    <p><span className="text-secondary">Comment:</span> They are so responsible with their duties!!</p>
                  </div>
                   
                </div>
            </div>
           
          <div className=" w-4/5 mx-20 mt-8 mb-8">
          <p className="text-primary mr-5 text-lg">Comment box:</p>
            <textarea placeholder='Your comment' className=' w-4/5 border border-black h-16'  name="" id="" cols="30" rows="10"></textarea><br />
            <button class="ml-5 btn btn-primary">Comment</button>

          </div>
         
           
        </div>
    );
};

export default Review;