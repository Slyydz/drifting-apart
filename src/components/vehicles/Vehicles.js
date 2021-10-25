import React, { useEffect, useState } from "react";
import { deleteVehicle, getVehicleById } from "./VehicleManager";
import { VehicleCard } from "./VehicleCard";
import "./Vehicles.css"
import { useHistory } from "react-router";

export const Vehicles = () => {

  const [vehicles, setVehicles] = useState([]);

  const history = useHistory();

  const getVehicles = () => {
    getVehicleById(parseInt(sessionStorage.getItem("drifting_user")))
      .then(res => {
        setVehicles(res);
      })
  }

  const handleDeleteVehicle = (vehicleId) => {
    deleteVehicle(vehicleId).then(() => getVehicles())
  }

  useEffect(() => {
    getVehicles();
  }, [])

  return (
    <>
      <div className="main-content">
        <div className="scroll-box">
          <h1 className="vehicles-title">My Vehicles:</h1>
          <button className="vehicles-add" onClick={() => history.push("/vehicles/add")}>Add A Vehicle +</button>
          <div className="vehicles-list">
            {vehicles.length !== 0 ? vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} handleDelete={handleDeleteVehicle} />) : <h2>No Vehicles Yet</h2>}
          </div>
        </div>
      </div>
    </>
  );
}