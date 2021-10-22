import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { PastTaskCard } from "./PastTaskCard";
import { getTasksByEventId } from "./TaskManager";
import "./Tasks.css"


export const PastTasks = () => {

    const [taskState, setTasks] = useState([]);

    const history = useHistory();

    const { eventParams } = useParams();

    const getTasks = () => {
        getTasksByEventId(eventParams)
            .then(res => {
                setTasks(res);
            });
    }

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <div className="main-content">
            <div className="scroll-box">
                <h1 className="tasks-title">Tasks:</h1>
                <div className="tasks-list">
                    {taskState.length == 0 ? <h2>No Tasks Yet</h2> : taskState.map(task => <PastTaskCard key={task.id} task={task} />)}
                </div>
            </div>
        </div>
    )

}