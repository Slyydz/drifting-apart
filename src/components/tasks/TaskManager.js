const remoteURL = "http://localhost:8088"

export const getTasksByEventId = (input) => {
    return fetch(`${remoteURL}/tasks/?eventId=${input}&_expand=event`)
    .then(res => res.json());
}

export const addTask = (input) => {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
    })
    .then(res => res.json());
}

export const deleteTask = (input) => {
    return fetch(`${remoteURL}/tasks/${input}`, {
        method: "DELETE"
    })
        .then(res => res.json())
}