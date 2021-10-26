import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { addTask } from './TaskManager';


export const TaskAdd = () => {

	const { eventParam } = useParams();

	const [task, setTask] = useState({
		taskName: "",
		taskDesc: "",
		eventId: eventParam,
		userId: parseInt(sessionStorage.getItem("drifting_user")),
		isCompleted: false
	});

	const history = useHistory();


	const handleControlledInputChange = (event) => {
		const newTask = { ...task }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newTask[event.target.id] = selectedVal
		// update state
		setTask(newTask)
	}

	const handleClickSaveEvent = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		addTask(task)
			.then(() => history.push(`/upcoming/tasks/${eventParam}`))

	}

	return (
		<form className="VehicleForm">
			<h2 className="VehicleForm__title">New Vehicle</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="taskName">Task Name:</label>
					<input type="text" id="taskName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task Name" value={task.taskName} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="taskDesc">Task Description:</label>
					<input type="text" id="taskDesc" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task Description" value={task.taskDesc} />
				</div>
			</fieldset>
			<button className="btn-add-save"
				onClick={handleClickSaveEvent}>
				Save Task
			</button>
			<button className="btn-add-edit"
				onClick={() => history.push(`/upcoming/tasks/${eventParam}`)}>
				Cancel
			</button>
		</form>
	)
};