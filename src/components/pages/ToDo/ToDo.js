import React, { useEffect, useState } from 'react';

const ToDo = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState(0)
    const [TodoData, setTodoData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setTodoData(data)
                }
            })
    })
    /*  ======================= Update ========================= */
    const modal = (id, name) => {
        setId(id)
        setName(name)
        console.log(id, name)
        //   fetch(`http://localhost:5000/Update/:${id}`, {
        //         method: 'PUT', // or 'PUT'
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({id}),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //        console.log(data)
        //     })

    }
    const Update = (id) => {
        console.log(id)
        //   fetch(`http://localhost:5000/Update/:${id}`, {
        //         method: 'PUT', // or 'PUT'
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({id}),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //        console.log(data)
        //     })
    }
    return (
        <div>
            <div class="overflow-x-auto w-full ">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Todo List</th>
                            <th>Update</th>
                            <th>checkbox</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            TodoData.map((dt, index) => <tr key={dt._id}>
                                <td>{index + 1}</td>
                                <td className='w-[60%]'>{dt.data}</td>
                                <td>
                                    <button onClick={() => modal(dt._id, dt.data)}>
                                        <label for="my-modal-3" class="btn modal-button">Update</label>
                                    </button>

                                </td>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                            </tr>
                            )}

                    </tbody>
                </table>
            </div>


            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1>{name}</h1>
                    <input type="text" placeholder={name} />
                    <button onClick={() => Update(id)}>Update</button>
                </div>
            </div>

        </div >
    );
};

export default ToDo;