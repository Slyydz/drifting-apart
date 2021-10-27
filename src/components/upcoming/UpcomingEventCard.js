import React from "react";
import { useHistory } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import { getUserById } from "./UpcomingEventManager";

export const UpcomingEventCard = ({ event, handleDelete }) => {

    const history = useHistory();

    const [user, setUser] = useState({ name: "" });

    const getUser = () => {
        getUserById(event.vehicle.userId)
            .then(res => setUser(res))
    }

    useEffect(() => {
        getUser();
    }, [])


    const dateVar = new Date(event.eventDate + 'T00:00:00');
    const displayDate = dateVar.toLocaleDateString();

    return (

        <div className="card">
            <div className="event-card">
                <div className="flex-card">
                    <h2 className="bold-under">Posted by:</h2><h2 className="bold">{user.name}</h2>
                </div>
                <div className="flex-card">
                    <h3 className="bold-under">Event: </h3><h3 className="bold"> {event.eventName}</h3>
                </div>
                <div className="flex-card">
                    <h4 className="bold-under">Description: </h4><h4 className="bold"> {event.eventDesc}</h4>
                </div>
                <div className="flex-card">
                    <p className="bold-under">Date: </p><p className="bold"> {displayDate}</p>
                </div>
                <div className="flex-card">
                    <p className="bold-under">Car: </p><p className="bold"> {event.vehicle.year} {event.vehicle.make} {event.vehicle.model}</p>
                </div>
                <div className="flex-card">
                    <p className="bold-under">Track: </p><p className="bold"> {event.eventTrack}</p>
                </div>
                <div className="buttons-events">
                    {user.id === parseInt(sessionStorage.getItem("drifting_user")) ? <><button className="events-delete" onClick={() => history.push(`/upcoming/tasks/${event.id}`)}>Show Tasks</button>
                        <button className="events-delete" onClick={() => handleDelete(event.id)}>Delete</button>
                        <button className="events-edit" onClick={() => history.push(`/upcoming/edit/${event.id}`)}>Edit</button> </> :
                        <button className="events-delete" onClick={() => history.push(`/upcoming/tasks/${event.id}`)}>Show Tasks</button>}
                </div>
            </div>
        </div>
    );
}