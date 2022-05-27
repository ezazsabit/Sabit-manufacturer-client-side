import React from 'react';

const Summery = () => {
    return (
     <div className='mt-8'>
      <p className='mt-5 text-6xl text-secondary'>Page Overview!!</p>
<div class="mt-8 stats stats-vertical lg:stats-horizontal shadow">
  
  <div class="stat w-1/3">
  <div class="stat-figure text-secondary">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
</div>
    <div class="stat-title">Served</div>
    <div class="stat-value">100+</div>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat w-1/3">
  <div class="stat-figure text-primary">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
</div>
    <div class="stat-title">Reviews</div>
    <div class="stat-value">33K+</div>
  
  </div>
  
  <div class="stat">
  <div class="stat-figure text-secondary">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
</div>
    <div class="stat-title">Annual Revenue</div>
    <div class="stat-value">120M+</div>

  </div>
  <div class="stat">
    <div class="stat-title">Tools</div>
    <div class="stat-value">50+</div>
   
  </div>
  
</div>

     </div>
    );
};

export default Summery;