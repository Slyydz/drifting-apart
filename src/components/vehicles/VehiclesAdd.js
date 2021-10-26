import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addVehicle } from './VehicleManager';
import "../FormStyle.css"

export const VehicleAdd = () => {

	const [vehicle, setVehicle] = useState({
		year: "",
		make: "",
		model: "",
		userId: parseInt(sessionStorage.getItem("drifting_user"))
	});

	const history = useHistory();


	const handleControlledInputChange = (event) => {
		const newVehicle = { ...vehicle }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newVehicle[event.target.id] = selectedVal
		// update state
		setVehicle(newVehicle)
	}

	const handleClickSaveVehicle = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		addVehicle(vehicle)
			.then(() => history.push("/vehicles"))

	}

	return (
		<form className="main-content">
			<h2 className="_title">New Vehicle:</h2>
			<fieldset className="fieldset">
				<div className="form-group">
					<label htmlFor="year">Vehicle year:</label>
					<input type="text" id="year" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Vehicle year" value={vehicle.year} />
				</div>
			</fieldset>
			<fieldset className="fieldset">
				<div className="form-group">
					<label htmlFor="make">Vehicle make:</label>
					<input type="text" id="make" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Vehicle make" value={vehicle.make} />
				</div>
			</fieldset>
			<fieldset className="fieldset">
				<div className="form-group">
					<label htmlFor="model">Vehicle model:</label>
					<input type="text" id="model" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Vehicle model" value={vehicle.model} />
				</div>
			</fieldset>
			<button className="btn-add-save"
				onClick={handleClickSaveVehicle}>
				Save Vehicle
			</button>
			<button className="btn-add-edit"
				onClick={() => history.push("/vehicles")}>
				Cancel
			</button>
		</form>
	)
};