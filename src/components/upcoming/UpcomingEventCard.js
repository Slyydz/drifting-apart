import React from "react";
import { useHistory } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import { getUserById } from "./UpcomingEventManager";

export const UpcomingEventCard = ({ event, handleDelete }) => {

    const history = useHistory();

    const [user, setUser] = useState();

    const getUser = () => {
        getUserById(event.vehicle.userId)
        .then(res => setUser(res.name))
    }

    useEffect(() => {
        getUser();
    }, [])


    const dateVar = new Date(event.eventDate);
    const displayDate = dateVar.toLocaleDateString()

    return (

        <div className="card">
            <div className="event-card">
                <h2>Posted by: {user}</h2>
                <h3>Event: {event.eventName}</h3>
                <h4>Description: {event.eventDesc}</h4>
                <p>Date: {displayDate}</p>
                <p>Car: {event.vehicle.year} {event.vehicle.make} {event.vehicle.model}</p>
                <p>Track: {event.eventTrack}</p>
                <div className="buttons-events">
                    <button className="events-delete" onClick={() => history.push(`/upcoming/tasks/${event.id}`)}>Show Tasks</button>
                    <button className="events-delete" onClick={() => handleDelete(event.id)}>Delete</button>
                    <button className="events-edit" onClick={() => history.push(`/upcoming/edit/${event.id}`)}>Edit</button>
                </div>
            </div>
        </div>

    );
}