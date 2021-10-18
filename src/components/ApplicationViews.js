import React from "react"
import { Route } from "react-router-dom"
import { Dashboard } from "./Dashboard"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
        <Dashboard /> 
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}