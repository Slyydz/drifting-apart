import React from "react";
import { useHistory } from "react-router";

export const UpcomingEventCard = ({event, handleDelete}) => {

    const history = useHistory();

    const dateVar = new Date(event.eventDate);
    const displayDate = dateVar.toLocaleDateString()

    return(
        
            <div className="card">
              <div className="event-card">
                <h3>{event.eventName}</h3>
                <h4>{event.eventDesc}</h4>
                <p>{displayDate}</p>
                <p>{event.eventTrack}</p>
                <button className="events-delete" onClick={() => handleDelete(event.id)}>Delete</button>
                <button className="events-edit" onClick={() => history.push(`/events/edit/${event.id}`)}>Edit</button>
              </div>
            </div>

    );
}