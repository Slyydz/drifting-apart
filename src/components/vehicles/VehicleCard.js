import React from "react";
import "./Vehicles.css"

export const VehicleCard = ({vehicle, handleDelete}) => {

        return (
            <div className="card">
              <div className="vehicle-card">
                <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
                <button className="vehicles-delete" onClick={() => handleDelete(vehicle.id)}>Delete</button>
              </div>
            </div>
          )
    }