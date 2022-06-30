import React, { useEffect, useState } from 'react';

const Tasks = () => {
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
    return (
        <div>
            {
                TodoData.map(dt=>
                <div>
                    {dt.Checkbox&&<h1>{dt.data}</h1>}
                </div>
                )
            }
        </div>
    );
};

export default Tasks;