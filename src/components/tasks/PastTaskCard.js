import React from "react";
import { useHistory } from "react-router";

export const PastTaskCard = ({ task }) => {

  const history = useHistory();


  return (
    <div className="card-task">
      <div className="task-card">
        <h2>{task.taskName}</h2>
        <h4>{task.taskDesc}</h4>
      </div>
    </div>
  )
}