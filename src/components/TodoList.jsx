import React, { useState } from 'react';

const TodoList = () => {
    // store
    const [tasks, setTasks] = useState([]);
    //add
    const [task, setTask] = useState('');
    // edit
    const [editIndex, setEditIndex] = useState(null);

    // handle add or update
    const handleTask = () => {
        // If there's a task input
        if (task) {
            if (editIndex === null) {
                // Add new task
                setTasks([...tasks, task]);
            } else {
                // Update task
                const updatedTasks = tasks.map((t, i) =>
                    i === editIndex ? task : t
                );
                setTasks(updatedTasks);
                setEditIndex(null); // Clear
            }
            setTask(''); // Clear input field
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">To-Do List</h1>

            {/* Input field for tasks */}
            <input type="text" className="form-control mb-2" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task"/>

            <button className="btn btn-success w-100" onClick={handleTask}>
                {editIndex === null ? 'Add Task' : 'Update Task'}
            </button>

            {/* List */}
            <ul className="list-group mt-4">
                {tasks.map((task, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {task}

                        <div>
                            <button
                                className="btn btn-warning me-2"
                                onClick={() => { setTask(task); setEditIndex(index); }}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
