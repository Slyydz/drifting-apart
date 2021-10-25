import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { getVehicleById } from "../vehicles/VehicleManager";
import { useState } from "react";
import { addEvent } from "./UpcomingEventManager";

export const UpcomingEventAdd = () => {

    const [eventState, setEvent] = useState({
        vehicleId: "",
        eventName: "",
        eventDesc: "",
        eventDate: "",
        eventTrack: "",
    });

    const [vehicleId, setVehicleId] = useState([])

    const history = useHistory();


    const handleControlledInputChange = (event) => {
        const newVehicle = { ...eventState }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers.
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newVehicle[event.target.id] = selectedVal
        // update state
        setEvent(newVehicle);
    }

    const handleClickSaveEvent = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        console.log(eventState);
        addEvent(eventState)
            .then(() => history.push("/upcoming"))

    }

    useEffect(() => {
        getVehicleById(parseInt(sessionStorage.getItem("drifting_user")))
            .then(res => {
                setVehicleId(res)
            });
    }, [])

    return (
        <form className="EventForm">
            <h2 className="EventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventName">Event Name:</label>
                    <input type="text" id="eventName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" value={eventState.eventName} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventDesc">Event Description:</label>
                    <input type="text" id="eventDesc" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event Description" value={eventState.eventDesc} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="vehicleId">Vehicle: </label>
                    <select value={eventState.vehicleId} name="vehicle" id="vehicleId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a vehicle</option>
                        {vehicleId.map(vehicle => (
                            <option key={vehicle.id} value={vehicle.id}>
                                {vehicle.year} {vehicle.make} {vehicle.model}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form__group">

                    <label htmlFor="eventDate">Select Date: </label>

                    <input type="date" id="eventDate" onChange={handleControlledInputChange} required className="form__group--edit" />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventTrack">Event Track:</label>
                    <input type="text" id="eventTrack" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event Track" value={eventState.eventTrack} />
                </div>
            </fieldset>
            <button className="btn-add-save"
                onClick={handleClickSaveEvent}>
                Save Event
            </button>
            <button className="btn-add-cancel"
                onClick={() => history.push("/upcoming")}>
                Cancel
            </button>
        </form>
    )
}