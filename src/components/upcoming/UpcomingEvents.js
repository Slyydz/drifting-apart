import React from "react";
import "./UpcomingEvents.css"
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { getEvents, deleteEvent } from "./UpcomingEventManager";
import { UpcomingEventCard } from "./UpcomingEventCard";

export const UpcomingEvents = () => {

  const [events, setEvents] = useState([]);

  const history = useHistory();

  const getEventsDom = () => {
    getEvents()
      .then(res => {
        setEvents(res);
      })
  }

  const handleDeleteEvent = (eventId) => {
    deleteEvent(eventId).then(() => getEventsDom())
  }

  useEffect(() => {
    getEventsDom();
  }, [])


  if (events.length == 0) {
    return (
      <>
        <div className="main-content">
          <h1 className="events-title">Upcoming Events:</h1>
          <button className="events-add" onClick={() => history.push("/events/add")}>Add An Event +</button>
          <div className="events-none">
            <h3>No Events Yet</h3>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="main-content">
          <div className="scroll-box">
            <h1 className="events-title">Upcoming Events:</h1>
            <button className="events-add" onClick={() => history.push("/events/add")}>Add An Event +</button>
            <div className="events-list">
              {events.map(event => <UpcomingEventCard key={event.id} event={event} handleDelete={handleDeleteEvent} />)}
            </div>
          </div>
        </div>
      </>
    );
  }
}