import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './AddaReview.css'

const AddaReview = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }
    const addReviewHandle=event=>{
        event.preventDefault();
        console.log(event);
       
        const ratings=event.target[0].value;
        const review=event.target[1].value;
        const email=user?.email
        const reviewData = {ratings,review,email}
       
        //--------------------database
        fetch('https://intense-brook-81804.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

            })
            alert("New review added successfully")
            event.target.reset()
    
    }
    return (
        <div className='mainsection'>
            <p className='mt-5 text-6xl text-secondary'>Add Reviews!!</p>
            <form onSubmit={addReviewHandle} action="">
                <div className=" w-4/5 mx-20 mt-8 mb-8">

                    <p>Your Ratings:<input type="text" required placeholder='ratings' name="" id="" /></p>
                    <p className='text-red-600 text-sm'>provide a value from 0 to 5</p>
                    <p className="text-primary mr-5 text-lg">Review box:</p>
                    <textarea placeholder='Your comment' className=' w-4/5 border border-black h-16' name="" id="" cols="30" rows="10"></textarea><br />
                    <button type='submit' class="ml-5 btn btn-primary">Review</button>

                </div>
            </form>
        </div>
    );
};

export default AddaReview;