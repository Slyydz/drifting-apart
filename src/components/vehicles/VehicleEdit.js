import React, { useState, useEffect } from "react"
import { update, getVehicleByIdSolo } from "./VehicleManager";
import { useParams, useHistory } from "react-router-dom";
import "../FormStyle.css"

export const VehicleEdit = () => {
    const [vehicle, setVehicle] = useState({ year: "", make: "", model: "", userId: parseInt(sessionStorage.getItem("drifting_user")) });

    const [isLoading, setIsLoading] = useState(false);

    const { vehicleId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...vehicle };
        stateToChange[evt.target.id] = evt.target.value;
        setVehicle(stateToChange);
    };

    const updateExistingVehicle = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedVehicle = {
            id: vehicleId,
            year: vehicle.year,
            make: vehicle.make,
            model: vehicle.model,
            userId: parseInt(sessionStorage.getItem("drifting_user"))
        };

        update(editedVehicle)
            .then(() => history.push("/vehicles")
            )
    }

    useEffect(() => {
        getVehicleByIdSolo(vehicleId)
            .then(veh => {
                setVehicle(veh);
                setIsLoading(false);
            });
    }, [vehicleId]);

    return (
        <>
            <div>
                <form className="main-content">
                    <h2 className="_title">Edit Vehicle:</h2>
                    <fieldset className="fieldset">
                        <div className="form-group">
                            <label htmlFor="year">Vehicle Year:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={handleFieldChange}
                                id="year"
                                value={vehicle.year}
                            />

                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <div className="form-group">
                            <label htmlFor="make">Vehicle Make:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={handleFieldChange}
                                id="make"
                                value={vehicle.make}
                            />
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <div className="form-group">
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
                    </fieldset>
                    <button
                        type="button" disabled={isLoading}
                        onClick={updateExistingVehicle}
                        className="btn-add-save"
                    >Submit</button>
                    <button
                        type="button" disabled={isLoading}
                        onClick={() => history.push("/vehicles")}
                        className="btn-add-edit"
                    >Cancel</button>
                </form>
            </div>
        </>
    );
}