import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth)
    const [myuser, setMyuser] = useState({})

    useEffect(() => {
        fetch(`https://intense-brook-81804.herokuapp.com/user?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyuser(data))
    }, [myuser])
    const { register, handleSubmit } = useForm();


    // for updating user info by form----------------------------------
    const onSubmit = data => {
        // data = { ...user.email }
        console.log(data)
        fetch(`https://intense-brook-81804.herokuapp.com/user?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
        setMyuser(data)
        // window.location.reload()
        // 


    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col">
                <img src={user?.photoURL} alt=" "></img>
                <div className="flex flex-col">
                    <p > email:<span className='text-xl text-secondary'>{myuser.email}</span></p>
                    <p > workplace:<span className='text-xl text-secondary'>{myuser?.Work}</span></p>
                    <p > name:<span className='text-xl text-secondary'>{myuser.name}</span></p>
                    <p > Address:<span className='text-xl text-secondary'>{myuser?.Address}</span></p>
                    <p > Phone:<span className='text-xl text-secondary'>{myuser?.phoneNumer}</span></p>



                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* -------------------react form used------------------------------- */}
                    <input type="text" placeholder="workplace" class="input input-bordered input-warning w-full max-w-xs" {...register("Work")} /><br></br>
                    <input type="text" placeholder="Address" class="input input-bordered input-warning w-full max-w-xs" {...register("Address")} /><br></br>
                    <input type="text" placeholder="phoneNumber" class="input input-bordered input-warning w-full max-w-xs" {...register("phoneNumer")} /><br></br>
                    <input className="btn btn-primary" type="submit" />
                </form>
                {/* {
                    window.location.reload()
                } */}
            </div>

        </div>
    );
};

export default Myprofile;