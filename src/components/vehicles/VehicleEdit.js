import React, { useState, useEffect } from "react"
import { update, getVehicleById } from "./VehicleManager";
import { useParams, useHistory } from "react-router-dom"

export const VehicleEdit = () => {
    const [vehicle, setVehicle] = useState({ year: "", make: "", model: ""});
    const [isLoading, setIsLoading] = useState(false);

    const { vehicleId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...vehicle };
        stateToChange[evt.target.id] = evt.target.value;
        setVehicle(stateToChange);
    };

    const updateExistingAnimal = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedAnimal = {
            id: vehicleId,
            year: vehicle.year,
            make: vehicle.make,
            model: vehicle.model,
            userId: parseInt(sessionStorage.getItem("drifting_user"))
        };

        update(editedAnimal)
            .then(() => history.push("/vehicles")
            )
    }

    useEffect(() => {
        getVehicleById(vehicleId)
            .then(vehicle => {
                setVehicle(vehicle);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                    <label htmlFor="year">Vehicle Year:</label>
                    <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="year"
                            value={vehicle.year}
                        />
                        
                        <label htmlFor="make">Vehicle Make:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="make"
                            value={vehicle.make}
                        />
                        
                        <label htmlFor="model">Model:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="model"
                            value={vehicle.model}
                        />
                    </div>
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingAnimal}
                            className="btn-edit-save"
                        >Submit</button>
                        <button
                            type="button" disabled={isLoading}
                            onClick={() => history.push("/vehicles")}
                            className="btn-edit-cancel"
                        >Cancel</button>
                </fieldset>
            </form>
        </>
    );
}