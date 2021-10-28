import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getUserById } from "../upcoming/UpcomingEventManager";

export const PastEventCard = ({ pastEvent }) => {

    const history = useHistory();

    const [user, setUser] = useState();


    const getUser = () => {
        getUserById(pastEvent.vehicle.userId)
            .then(res => setUser(res.name))
    }

    useEffect(() => {
        getUser();
    }, [])

    const dateVar = new Date(pastEvent.eventDate + 'T00:00:00');
    const displayDate = dateVar.toLocaleDateString();

    return (

        <div className="card">
            <div className="pastEvent-card">
                <div className="flex-card">
                    <h2 className="bold-under">Posted by:</h2><h2 className="bold">{user}</h2>
                </div>
                <div className="flex-card">
                    <h3 className="bold-under">Event: </h3><h3 className="bold"> {pastEvent.eventName}</h3>
                </div>
                <div className="flex-card">
                    <h4 className="bold-under">Description: </h4><h4 className="bold"> {pastEvent.eventDesc}</h4>
                </div>
                <div className="flex-card">
                    <p className="bold-under">Date: </p><p className="bold"> {displayDate}</p>
                </div>
                <div className="flex-card">
                    <p className="bold-under">Car: </p><p className="bold"> {pastEvent.vehicle.year} {pastEvent.vehicle.make} {pastEvent.vehicle.model}</p>
                </div>
                <div className="flex-card">
                    <p className="bold-under">Track: </p><p className="bold"> {pastEvent.eventTrack}</p>
                </div>
                <div className="buttons-events">
                    <button className="events-delete" onClick={() => history.push(`/past/tasks/${pastEvent.id}`)}>Show Tasks</button>
                </div>
            </div>
        </div>

    );
}