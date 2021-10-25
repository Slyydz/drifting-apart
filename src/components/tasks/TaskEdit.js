import React, { useState, useEffect } from "react"
import { update, getTasksById } from "./TaskManager";

import { useParams, useHistory } from "react-router-dom"

export const TaskEdit = () => {
    const { eventId } = useParams();

    const [task, setTask] = useState({
        taskName: "", taskDesc: "", eventId: eventId,
        userId: parseInt(sessionStorage.getItem("drifting_user"))
    });

    const [isLoading, setIsLoading] = useState(false);

    const { taskId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange);
    };

    const updateExistingTask = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedTask = {
            id: taskId,
            taskName: task.taskName,
            taskDesc: task.taskDesc,
            eventId: eventId,
            userId: parseInt(sessionStorage.getItem("drifting_user"))
        };

        update(editedTask)
            .then(() => history.push(`/upcoming/tasks/${eventId}`)
            )
    }

    useEffect(() => {
        getTasksById(taskId)
            .then(task => {
                setTask(task);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="taskName">Task Name:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="taskName"
                            value={task.taskName}
                        />

                        <label htmlFor="taskDesc">Task Description:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="taskDesc"
                            value={task.taskDesc}
                        />

                    </div>
                    <button
                        type="button" disabled={isLoading}
                        onClick={updateExistingTask}
                        className="btn-edit-save"
                    >Submit</button>
                    <button
                        type="button" disabled={isLoading}
                        onClick={() => history.push(`/upcoming/tasks/${eventId}`)}
                        className="btn-edit-cancel"
                    >Cancel</button>
                </fieldset>
            </form>
        </>
    );
}