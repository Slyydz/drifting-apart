import React from "react";
import { useHistory } from "react-router";

export const TaskCard = ({task, handleDelete}) => {

        const history = useHistory();


        return (
            <div className="card">
              <div className="task-card">
                <h2>{task.taskName}</h2>
                <h4>{task.taskDesc}</h4>
                <button className="tasks-delete" onClick={() => handleDelete(task.id)}>Delete</button>
                <button className="tasks-edit" onClick={() => history.push(`/upcoming/tasks/${task.eventId}/edit/${task.id}`)}>Edit</button>
              </div>
            </div>
          )
    }