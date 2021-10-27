const remoteURL = "http://localhost:8088";


export const addPhoto = (input) => {
    return fetch(`${remoteURL}/photos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
    })
        .then(res => res.json());
}

export const getPhotos = (input) => {
    return fetch(`${remoteURL}/photos`)
        .then(res => res.json());
}