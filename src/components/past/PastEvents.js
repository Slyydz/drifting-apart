import React, { useEffect, useState } from "react";
import { getEvents } from "../upcoming/UpcomingEventManager";
import { PastEventCard } from "./PastEventCard";
import "../upcoming/UpcomingEvents.css"
import { useHistory } from "react-router";

export const PastEvents = () => {

  const history = useHistory();
  const [pastEvents, setPast] = useState([]);

  const getPastEventsDom = () => {
    const today = new Date();
    const parsedToday = today.getTime();
    return getEvents().then(eventsFromAPI => {
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

  if (pastEvents.length == 0) {

    return (
      <>
        <div className="main-content">
          <h1 className="events-title">Upcoming Events:</h1>
          <button className="events-add" onClick={() => history.push("/upcoming/add")}>Add An Event +</button>
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
              <div className="events-list">
                {pastEvents.map(pastEvent => <PastEventCard key={pastEvent.id} pastEvent={pastEvent} />)}
              </div>
            </div>
          </div>
        </>
     
    )
  }



}