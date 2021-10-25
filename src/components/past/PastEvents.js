import React, { useEffect, useState } from "react";
import { getPastEvents } from "../upcoming/UpcomingEventManager";
import { PastEventCard } from "./PastEventCard";
import "../upcoming/UpcomingEvents.css"
import { useHistory } from "react-router";

export const PastEvents = () => {

  const history = useHistory();
  const [pastEvents, setPast] = useState([]);

  const getPastEventsDom = () => {
    const today = new Date();
    const parsedToday = today.getTime();
    return getPastEvents().then(eventsFromAPI => {
      const copyOfEvents = [...eventsFromAPI]
      const futureDatedEvents = copyOfEvents.filter(function (evt) {
        let evtDate = Date.parse(evt.eventDate);
        if (evtDate < parsedToday) {
          return evt
        }
      })
      setPast(futureDatedEvents);
    });
  };

  useEffect(() => {
    getPastEventsDom();
  }, [])

  return (
    <>
      <div className="main-content">
        <h1 className="events-title">Past Events:</h1>
        <div className="scroll-box">
          <div className="events-list">
            {pastEvents.length !== 0 ? pastEvents.map(pastEvent => <PastEventCard key={pastEvent.id} pastEvent={pastEvent} />) : <h2>No Past Events</h2>}
          </div>
        </div>
      </div>
    </>
  )



}