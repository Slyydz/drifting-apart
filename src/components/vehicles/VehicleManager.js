const remoteURL = "http://localhost:8088"

export const getVehicleById = (userId) => {
  return fetch(`${remoteURL}/vehicles/?userId=${userId}&_expand=user`)
    .then(res => res.json())
}

export const getVehicleByIdSolo = (input) => {
  return fetch(`${remoteURL}/vehicles/${input}?_expand=user`)
    .then(res => res.json())
}

export const deleteVehicle = (vehicleId) => {
  return fetch(`${remoteURL}/vehicles/${vehicleId}`, {
    method: "DELETE"
  })
    .then(res => res.json())
}

export const addVehicle = (newVehicle) => {
  return fetch(`${remoteURL}/vehicles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newVehicle)
  }).then(response => response.json())
}

export const update = (editedVehicle) => {
  return fetch(`${remoteURL}/vehicles/${editedVehicle.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedVehicle)
  }).then(data => data.json());
}
