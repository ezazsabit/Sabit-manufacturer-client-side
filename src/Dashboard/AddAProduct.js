import React from 'react';
import { useForm } from "react-hook-form";

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* -------------------react form used------------------------------- */}
                <input type="text" placeholder="productname" class="input input-bordered input-warning w-full max-w-xs" {...register("Name")} /><br></br>
                <input type="text" placeholder="description" class="input input-bordered input-warning w-full max-w-xs" {...register("Descrpition")} /><br></br>
                <input type="number" placeholder="qunatity" class="input input-bordered input-warning w-full max-w-xs" {...register("AvailableQuantity")} /><br></br>
                <input type="number" placeholder="minimumorder" class="input input-bordered input-warning w-full max-w-xs" {...register("MinimumOrderQuantity")} /><br></br>
                <input type="number" placeholder="price" class="input input-bordered input-warning w-full max-w-xs" {...register("Price")} /><br></br>
                <input type="text" placeholder="image" class="input input-bordered input-warning w-full max-w-xs" {...register("picture")} /><br></br>
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;