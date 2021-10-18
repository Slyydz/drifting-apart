import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./components/ApplicationViews"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Footer } from "./components/footer/Footer"
import { NavBar } from "./components/nav/NavBar"

export const DriftingApart = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("drifting_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
              <Footer />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)