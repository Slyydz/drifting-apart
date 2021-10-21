import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { TaskCard } from "./TaskCard";
import { deleteTask, getTasksByEventId } from "./TaskManager";
import "./Tasks.css"


export const Tasks = () => {

    const [taskState, setTasks] = useState([]);

    const history = useHistory();

    const { eventId } = useParams();

    const getTasks = () => {
        getTasksByEventId(eventId)
            .then(res => setTasks(res));
    }

    const handleDelete = (taskId) => {
        deleteTask(taskId)
            .then(() => getTasks());
    }

    useEffect(() => {
        getTasks();
        console.log(taskState);
    }, [])

    return (
        <div className="main-content">
            <div className="scroll-box">
                <h1 className="tasks-title">Tasks:</h1>
                <button className="tasks-add" onClick={() => history.push(`/tasks/add/${eventId}`)}>Add A Task +</button>
                <div className="tasks-list">
                    { taskState.length == 0 ? <h2>No Tasks Yet</h2> : taskState.map(task => <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>)}
                </div>
            </div>
        </div>
    )

}