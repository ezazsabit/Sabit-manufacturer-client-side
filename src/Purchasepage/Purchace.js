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
    }, [id,data]);
    // ---------------------------------------------
    return (
        <div>
            <p className='mt-5 text-6xl text-secondary'>Purchase from here!!</p>
        </div>
    );
};

export default Purchace;