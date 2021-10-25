import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { PastTaskCard } from "./PastTaskCard";
import { getTasksByEventId } from "./TaskManager";
import "./Tasks.css"


export const PastTasks = () => {

    const [taskIncomplete, setIncomplete] = useState([]);
    const [taskComplete, setComplete] = useState([]);

    const history = useHistory();

    const { eventParams } = useParams();

    const getTasks = () => {
        getTasksByEventId(eventParams)
            .then(res => {
                setComplete(res.filter(task => task.isCompleted))
                setIncomplete(res.filter(task => task.isCompleted != true))
            });
    }

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <div className="main-content">
            <div className="scroll-box">
                <h1 className="tasks-title">Tasks:</h1>
                <h2 className="incomplete">Incomplete Tasks:</h2>
                <div className="incomplete-tasks-list">
                    {taskIncomplete.length == 0 ? <h2>No Incomplete Tasks</h2> : taskIncomplete.map(task => <PastTaskCard key={task.id} task={task} getTasks={getTasks} />)}
                </div>
                <h2 className="complete">Completed Tasks:</h2>
                <div className="complete-tasks-list">
                    {taskComplete.length == 0 ? <h2>No Completed Tasks</h2> : taskComplete.map(task => <PastTaskCard key={task.id} task={task} getTasks={getTasks} />)}
                </div>
            </div>
        </div>
    )

}