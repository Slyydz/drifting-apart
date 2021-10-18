import React from "react"
import { Route } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { Vehicles } from "./vehicles/Vehicles"
import { UpcomingEvents } from "./upcoming/UpcomingEvents"
import { PastEvents } from "./past/PastEvents"
import { PhotoGallery } from "./gallery/PhotoGallery"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
        <Dashboard /> 
      </Route>
      <Route path="/vehicles">
        {/* Render the component for list of vehicles */}
        <Vehicles />
      </Route>
      <Route path="/upcoming">
        {/* Render the component for the upcoming */}
        <UpcomingEvents />
      </Route>
      <Route path="/past">
        {/* Render the component for the user's past */}
        <PastEvents />
      </Route>
      <Route path="/gallery">
        {/* Render the component for the user's gallery */}
        <PhotoGallery />
      </Route>
    </>
  )
}