import React from "react";

export const PastTaskCard = ({ task }) => {



  return (
    <div className="card-task">
      <div className="task-card">
        <h2>{task.taskName}</h2>
        <h4>{task.taskDesc}</h4>
      </div>
    </div>
  )
}