import React from 'react';

const Home = () => {
    const submit = (ev) => {
        if (ev.charCode === 13) {
            const Value = ev.target.value
            if (Value) {
                fetch('http://localhost:5000/addItems', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({data:Value}),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })


            }
            ev.preventDefault();
        }
    }

    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className='bg-red-500 p-4'>
                <h1>Todo List Add </h1>
                <input
                    onKeyPress={(ev) => { submit(ev) }}
                    type="text"
                    placeholder='Enter Your Tasks' />
            </div>
        </div>
    );
};

export default Home;