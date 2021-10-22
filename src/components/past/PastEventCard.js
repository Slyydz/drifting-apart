import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import { getUserById } from "../upcoming/UpcomingEventManager";

export const PastEventCard = ({pastEvent}) => {

    const history = useHistory();

    const [user, setUser] = useState();


    const getUser = () => {
        getUserById(pastEvent.vehicle.userId)
        .then(res => setUser(res.name))
    }

    useEffect(() => {
        getUser();
    }, [])

    const dateVar = new Date(pastEvent.eventDate);
    const displayDate = dateVar.toLocaleDateString();

    return (

        <div className="card">
            <div className="pastEvent-card">
                <h2>Posted by: {user}</h2>
                <h3>Event: {pastEvent.eventName}</h3>
                <h4>Description: {pastEvent.eventDesc}</h4>
                <p>Date: {displayDate}</p>
                <p>Car: {pastEvent.vehicle.year} {pastEvent.vehicle.make} {pastEvent.vehicle.model}</p>
                <p>Track: {pastEvent.eventTrack}</p>
                <div className="buttons-events">
                    <button className="events-delete" onClick={() => history.push(`/past/tasks/${pastEvent.id}`)}>Show Tasks</button>
                    {/* <button className="events-delete" onClick={() => handleDelete(pastEvent.id)}>Delete</button> */}
                </div>
            </div>
        </div>

    );
}