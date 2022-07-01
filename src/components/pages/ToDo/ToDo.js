import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Home from '../Home/Home'
import Spinner from '../shared/Spinner/Spinner';
const ToDo = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState(0)
    const [TodoData, setTodoData] = useState([])
    const [Lod, setLod] = useState(true)

    /* =================== Total Todo list is a get  =========================  */
    useEffect(() => {
        fetch('https://shrouded-bayou-63595.herokuapp.com/items')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setTodoData(data)
                    setLod(false)
                }
            })
    })

    /*  ======================= Update Button Click In modal show ========================= */
    const modal = (UpdateId, name) => {
        setId(UpdateId)
        setName(name)
    }

    /* ===================== Todo Value is Update ================== */
    const Update = (e) => {
        const updateTodo = e.target.text.value;


        if (id) {
            fetch(`https://shrouded-bayou-63595.herokuapp.com/upToDo/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ updateTodo }),
            })
                .then((res) => res.json())
                .then((data) => {
                    e.target.value = ''
                    toast.success('Update Value ')
                });
        }
        e.preventDefault();

    }


    /*  =================== Click in the Checkbox ====================  */
    const Checkbox = (CheckID) => {

        fetch(`https://shrouded-bayou-63595.herokuapp.com/Checkbox/${CheckID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                toast.success('Update Checkbox!')
            });

    }


    return (
        <>
            {
                Lod ? <Spinner></Spinner> : <div>
                    <div>
                        {/* ==================== Home Pages ================================ */}
                        <Home></Home>
                    </div>
                    {/* =====================  Table  ====================================== */}
                    <div>

                        <div class="overflow-x-auto w-full px-4 md:px-32  lg:px-40">
                            <table class="table w-full shadow-md mb-20  rounded-2xl">
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
                                                    <input onClick={() => Checkbox(dt._id)} type="checkbox"
                                                     class="checkbox" checked={dt.Checkbox && 'checked'} 
                                                    //  {dt?.Checkbox && disabled}
                                                    disabled={dt?.Checkbox && 'disabled'}
                                                    />
                                                </label>
                                            </th>
                                        </tr>
                                        )}

                                </tbody>
                            </table>
                        </div>

                        {/* ===================== Modal ======================= */}
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h1 className='text-2xl font-medium text-center py-2'>{name}</h1>
                                <form onSubmit={Update} className='text-center'>
                                    <input type="text" placeholder="Update Value " class="input input-bordered input-accent w-full max-w-xs my-5" name='text' required />
                                    <h1 className='text-center'><button class="btn " type="submit">Submit</button></h1>
                                </form>
                            </div>
                        </div>

                    </div >
                </div>
            }

        </>

    );
};

export default ToDo;