import React from "react";
import { useHistory } from "react-router";
import { update } from "./TaskManager";

export const TaskCard = ({ task, handleDelete, getTasks }) => {

  const history = useHistory();


  const changeCompleted = () => {

    const completeTask = {
      id: task.id,
      taskName: task.taskName,
      taskDesc: task.taskDesc,
      eventId: task.eventId,
      userId: parseInt(sessionStorage.getItem("drifting_user")),
      isCompleted: true
    }

    update(completeTask).then(() => {
      getTasks();
    })
  }

  if (task.userId === parseInt(sessionStorage.getItem("drifting_user"))) {
    return (
      <div className="card-task">
        <div className="task-card">
          <h2>{task.taskName}</h2>
          <h4>{task.taskDesc}</h4>
          {task.isCompleted ? null : <button className="tasks-delete" onClick={() => handleDelete(task.id)}>Delete</button>}
          {task.isCompleted ? null : <button className="tasks-edit" onClick={() => history.push(`/upcoming/tasks/${task.eventId}/edit/${task.id}`)}>Edit</button>}
        </div>
        <div className="checkbox">
          {task.isCompleted ? null : <input type="checkbox" name="completed" onClick={() => changeCompleted()} />}
        </div>
      </div>
    )
  } else {

    return (
      <div className="card-task">
        <div className="task-card">
          <h2>{task.taskName}</h2>
          <h4>{task.taskDesc}</h4>
        </div>
      </div>
    )

  }


}