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
    const modal = (UpdateId, name) => {
        setId(UpdateId)
        setName(name)
    }

    const Update = (e) => {
        const updateTodo = e.target.text.value;


        if (id) {
            fetch(`http://localhost:5000/upToDo/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ updateTodo }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    e.target.value = ''
                    // toast.success('Update Successfully!')
                });
        }
        e.preventDefault();

    }
    /*  =================== Checkbox ====================  */
    const Checkbox = (CheckID) => {

        fetch(`http://localhost:5000/Checkbox/${CheckID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                // toast.success('Update Successfully!')
            });

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
                                        <input onClick={() => Checkbox(dt._id)} type="checkbox" class="checkbox" checked={dt.Checkbox&&'checked'} />
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
                    <form onSubmit={Update}>
                        <input type="text" name='text' required></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div >
    );
};

export default ToDo;