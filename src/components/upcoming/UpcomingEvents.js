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
    const today = new Date();
    const parsedToday = today.getTime();
    return getEvents().then(eventsFromAPI => {
      const copyOfEvents = [...eventsFromAPI]
      const futureDatedEvents = copyOfEvents.filter(function (evt) {
        let evtDate = Date.parse(evt.eventDate);
        if (evtDate > parsedToday) {
          return evt;
        }
      })
      setEvents(futureDatedEvents);
    });
  };

  const handleDeleteEvent = (eventId) => {
    deleteEvent(eventId).then(() => getEventsDom())
  }

  // const displayData = ({events}) => {
  //   {events.length === 0 ?  events.map(event => <UpcomingEventCard key={event.id} event={event} handleDelete={handleDeleteEvent} />)  : <h2>No Events Yet</h2>}
  // }

  useEffect(() => {
    getEventsDom();
  }, [])


  return (
    <>
      <div className="main-content">
        <h1 className="events-title">Upcoming Events:</h1>
        <button className="events-add" onClick={() => history.push("/upcoming/add")}>Create An Event +</button>
        <div className="scroll-box">
          <div className="events-list">
            {events.length !== 0 ? events.map(event => <UpcomingEventCard key={event.id} event={event} handleDelete={handleDeleteEvent} />) : <h2>No Events Yet</h2>}
          </div>
        </div>
      </div>
    </>
  );

}