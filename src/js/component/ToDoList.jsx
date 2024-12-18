import React, { useState } from "react";

const ToDoList = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

	return (
        <div className="row justify-content-center p-4 mt-2 bg-dark rounded">
            <h1 className="text-light">-LISTA DE TAREAS-</h1>
            <ul className="list-group text-start p-3 bg-warning" style={{ width: '50rem' }}>
                <input className="list-group-item" placeholder="Whats needs to be done?" type="text" 
                onChange={(e)=> setTask(e.target.value)}
                value={task}
                // Agregar el texto al arreglo mediante tecla ENTER
                onKeyUp = {(e) => {
                    if (e.key === "Enter") {
                      setTasks(() => [...tasks, task]);
                      // Reset de la variable task
                      setTask('');}
                }}></input>

                {tasks.map ((text, index) => (
                <li className="list-group-item d-flex justify-content-between">
                    <div>{text}</div>
                    <a href="#!"><i className="btn-close" onClick={()=> setTasks(tasks.filter((t, currentindex) => index !== currentindex))}></i></a>
                </li>
                ))}
                <li className="list-group-item bg-secondary-subtle p-1 d-flex justify-content-end" style={{fontSize: '14px'}}>{tasks.length} tasks</li>
            </ul>
        </div>
    );
};

export default ToDoList;