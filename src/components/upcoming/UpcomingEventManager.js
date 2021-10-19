const remoteURL = "http://localhost:8088"

export const getEvents = () => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/events/?_expand=vehicle`)
        .then(res => res.json())
}

export const getEventsById = (eventId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/events/?${eventId}&_expand=vehicle`)
        .then(res => res.json())
}

export const deleteEvent = (eventId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/events/${eventId}`, {
        method: "DELETE"
    })
        .then(res => res.json())
}

export const addEvent = (newEvent) => {
    return fetch(`${remoteURL}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(response => response.json())
  }

  export const update = (editedEvent) => {
    return fetch(`${remoteURL}/events/${editedEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEvent)
    }).then(data => data.json());
  } 