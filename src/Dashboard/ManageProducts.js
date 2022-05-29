import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://intense-brook-81804.herokuapp.com/tools`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [data]);
    const handleDelete = (id) => {
        console.log(id);
        const _id = { id };
        if (window.confirm("Are you sure?!")) {
            fetch(`https://intense-brook-81804.herokuapp.com/tools/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(_id),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

        }
        window.location.reload()

    }
    console.log(data)
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item</th>
                            <th>Quantity</th>

                            <th>minimumorder</th>
                            <th>price</th>
                            <th>Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            data.map((a, index) =>

                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.Name}</td>
                                    <td>{a.AvailableQuantity
                                    }</td>
                                    <td>{a.MinimumOrderQuantity}</td>

                                    <td>{a.Price}</td>
                                    <td><button onClick={() => handleDelete(a._id)} class="btn w-64 rounded-full">Cancel</button></td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;