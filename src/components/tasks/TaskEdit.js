import React, { useState, useEffect } from "react"
import { update, getTasksById } from "./TaskManager";
import "../FormStyle.css"
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
    }, [taskId]);

    return (
        <>
            <form className="main-content">
                <h2 className="_title">Edit Task:</h2>
                <fieldset className="fieldset">
                    <div className="form-group">
                        <label htmlFor="taskName">Task Name:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="taskName"
                            value={task.taskName}
                        />
                    </div>

                </fieldset>

                <fieldset className="fieldset">
                    <div className="form-group">
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
                </fieldset>

                <button
                    type="button" disabled={isLoading}
                    onClick={updateExistingTask}
                    className="btn-add-save"
                >Submit</button>
                <button
                    type="button" disabled={isLoading}
                    onClick={() => history.push(`/upcoming/tasks/${eventId}`)}
                    className="btn-add-edit"
                >Cancel</button>

            </form>
        </>
    );
}