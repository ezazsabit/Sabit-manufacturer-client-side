import React, { useEffect, useState } from 'react';

const Review = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://intense-brook-81804.herokuapp.com/review`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
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
            {
              data.map(a=>
                <div className='max-w-80 mx-20 flex items-center ' >
                <div class="mt-5 avatar">
                    <div class="max-w-24 max-h-24   rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src="https://api.lorem.space/image/face?hash=3184" />
                   
                
                    
                
                    </div>
                  <div className='text-left h-24 lg:w-96   my-5'>
                  <p><span className="text-secondary">Name:</span> {a.email.slice(0,3)}</p>
                  <p><span className="text-secondary">Ratings:</span>{a.ratings}</p>
                    <p><span className="text-secondary">Comment:</span>{a.review}</p>
                  </div>
                   
                </div>
            </div>
                )
            }
           
          
         
           
        </div>
    );
};

export default Review;