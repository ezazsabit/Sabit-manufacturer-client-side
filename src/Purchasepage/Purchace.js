import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchace = () => {
    // ----------------------
    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [id, data]);
    // ---------------------------------------------

    return (
        <div>
            <p className='mt-5 text-6xl text-secondary'>Purchase from here!!</p>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={data.picture} class="max-w-sm rounded-lg " />
                    <div>
                        <h1 class="text-5xl font-bold">{data.Name}</h1>
                        <p class="py-6">{data.Description}</p>
                        {/* <p className='text-left'>{data.Description}</p> */}
                        <p className='text-left'><span className='text-lg text-primary'>Available Quantity:</span>{data.AvailableQuantity}</p>
                        <p className='text-left'><span className='text-lg text-primary'>Minimum Order Quantity:</span>{data.MinimumOrderQuantity}</p>
                        <p className='text-left'><span className='text-lg text-primary'>Price:</span>${data.Price}</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchace;