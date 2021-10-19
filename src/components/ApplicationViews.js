import React from "react"
import { Route } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { Vehicles } from "./vehicles/Vehicles"
import { UpcomingEvents } from "./upcoming/UpcomingEvents"
import { PastEvents } from "./past/PastEvents"
import { PhotoGallery } from "./gallery/PhotoGallery"
import { VehicleAdd } from "./vehicles/VehiclesAdd"
import { VehicleEdit } from "./vehicles/VehicleEdit"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
        <Dashboard /> 
      </Route>
      <Route exact path="/vehicles">
        {/* Render the component for list of vehicles */}
        <Vehicles />
      </Route>
      <Route exact path="/vehicles/add">
        {/* Render the component for list of vehicles */}
        <VehicleAdd />
      </Route>
      <Route exact path="/vehicles/edit/:vehicleId(\d+)">
        {/* Render the component for list of vehicles */}
        <VehicleEdit />
      </Route>
      <Route exact path="/upcoming">
        {/* Render the component for the upcoming */}
        <UpcomingEvents />
      </Route>
      <Route exact path="/past">
        {/* Render the component for the user's past */}
        <PastEvents />
      </Route>
      <Route exact path="/gallery">
        {/* Render the component for the user's gallery */}
        <PhotoGallery />
      </Route>
    </>
  )
}