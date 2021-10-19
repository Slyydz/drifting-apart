import React from "react";
import { useHistory } from "react-router";
import "./Vehicles.css"

export const VehicleCard = ({vehicle, handleDelete, handleEdit}) => {

        const history = useHistory();

        return (
            <div className="card">
              <div className="vehicle-card">
                <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
                <button className="vehicles-delete" onClick={() => handleDelete(vehicle.id)}>Delete</button>
                <button className="vehicles-edit" onClick={() => history.push(`/vehicles/edit/${vehicle.id}`)}>Edit</button>
              </div>
            </div>
          )
    }