import React, { useState, useEffect } from "react";
import { getVehicleById } from "../vehicles/VehicleManager";
import { getEventsById } from "./UpcomingEventManager";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import { update } from "./UpcomingEventManager";

export const UpcomingEventEdit = () => {

    const [eventState, setEvent] = useState({
        vehicleId: "",
        eventName: "",
        eventDesc: "",
        eventDate: "",
        eventTrack: "",
    });

    const [vehicleId, setVehicle] = useState([]);

    const { eventId } = useParams();

    const [isLoading, setIsLoading] = useState(false);


    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...eventState };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const updateExistingEvent = evt => {
        evt.preventDefault()

        setIsLoading(true);

        // This is an edit, so we need the id
        const editedEvent = {
            id: eventId,
            vehicleId: eventState.vehicleId,
            eventName: eventState.eventName,
            eventDesc: eventState.eventDesc,
            eventDate: eventState.eventDate,
            eventTrack: eventState.eventTrack,
        };

        update(editedEvent)
            .then(() => history.push("/upcoming"));
    }

    useEffect(() => {
        getEventsById(eventId)
            .then(evt => {
                console.log(evt)
                setEvent(evt);
                setIsLoading(false);
            });

        getVehicleById(parseInt(sessionStorage.getItem("drifting_user")))
            .then(res => {
                setVehicle(res)
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>

                    <div className="formgrid">
                        <label htmlFor="eventName">Event Name:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="eventName"
                            value={eventState.eventName}
                        />

                        <label htmlFor="eventDesc">Event Description:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="eventDesc"
                            value={eventState.eventDesc}
                        />

                        <label htmlFor="eventDesc">Event Date:</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="eventDate"
                            value={eventState.eventDate}
                        />
                        <label htmlFor="vehicleId">Vehicle: </label>
                        <select value={eventState.vehicleId} name="vehicle" id="vehicleId" onChange={handleFieldChange} className="form-control" >
                            <option value="0">Select a vehicle</option>
                            {vehicleId.map(vehicle => (
                                <option key={vehicle.id} value={vehicle.id}>
                                    {vehicle.year} {vehicle.make} {vehicle.model}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="model">Event Track:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="eventTrack"
                            value={eventState.eventTrack}
                        />
                    </div>
                    <button
                        type="button" disabled={isLoading}
                        onClick={updateExistingEvent}
                        className="btn-edit-save"
                    >Submit</button>
                    <button
                        type="button" disabled={isLoading}
                        onClick={() => history.push("/upcoming")}
                        className="btn-edit-cancel"
                    >Cancel</button>
                </fieldset>
            </form>
        </>
    );
}