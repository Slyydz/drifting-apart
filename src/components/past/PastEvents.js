import React, { useState } from "react";
import { getEvents } from "../upcoming/UpcomingEventManager";
import "./PastEvents.css"

export const PastEvents = () => {

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

    return (
            <>
            <div className="main-content">
        
              <div className="PastEvents__subtitle">Past Events</div>
        
            </div>
            </>
    )
}