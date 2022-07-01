import React from 'react';

const Home = () => {
    const submit = (ev) => {
        if (ev.charCode === 13) {
            const Value = ev.target.value
            if (Value) {
                fetch('http://localhost:5000/addItems', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: Value }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data) {
                            ev.target.value = ''
                        }
                    })

            }
            ev.preventDefault();
        }
    }

    return (
        <div className='flex justify-center items-center mt-24 mb-16'>
            <input
                class="input input-bordered input-lg w-[300px] md:w-[400px] px-auto"
                onKeyPress={(ev) => { submit(ev) }}
                type="text"
                placeholder='Enter Your Tasks' />
        </div>
    );
};

export default Home;