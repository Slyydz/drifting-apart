import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { TaskCard } from "./TaskCard";
import { deleteTask, getTasksByEventId } from "./TaskManager";
import "./Tasks.css"


export const Tasks = () => {

    const [taskIncomplete, setTasks] = useState([]);
    const [taskComplete, setComplete] = useState([])

    const history = useHistory();

    const { eventId } = useParams();

    const getTasks = () => {
        getTasksByEventId(eventId)
            .then(res => {
                setComplete(res.filter(taco => taco.isCompleted))
                setTasks(res.filter(taco => taco.isCompleted != true))

            });
    }

    const handleDelete = (taskId) => {
        deleteTask(taskId)
            .then(() => getTasks());
    }

    useEffect(() => {
        getTasks();
        console.log(taskIncomplete);
        console.log(taskComplete);
    }, [])

    return (
        <div className="main-content">
            <div className="scroll-box">
                <h1 className="tasks-title">Tasks:</h1>
                <button className="tasks-add" onClick={() => history.push(`/tasks/add/${eventId}`)}>Add A Task +</button>
                <h2 className="incomplete">Incomplete Tasks:</h2>
                <div className="incomplete-tasks-list">
                    {taskIncomplete.length == 0 ? <h2>No Incomplete Tasks</h2> : taskIncomplete.map(task => <TaskCard key={task.id} task={task} handleDelete={handleDelete} getTasks={getTasks} />)}
                </div>
                <h2 className="complete">Completed Tasks:</h2>
                <div className="complete-tasks-list">
                    {taskComplete.length == 0 ? <h2>No Completed Tasks</h2> : taskComplete.map(task => <TaskCard key={task.id} task={task} handleDelete={handleDelete} getTasks={getTasks} />)}
                </div>
            </div>
        </div>
    )

}