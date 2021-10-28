import React, { useEffect, useState } from "react";
import { Image } from 'cloudinary-react';
import { getUserById } from "../upcoming/UpcomingEventManager";


export const PhotoCard = ({ photo, handleDelete }) => {

    const [userState, setUser] = useState({});

    const getUserDom = () => {
        getUserById(photo.userId).then((res) => setUser(res))
    }

    useEffect(() => {
        getUserDom();
    }, [])


    return (
        <div className="card-gallery-task">
            <div className="gallery-card">
                <Image style={{ width: 500, height: 300 }} cloudName="dkchtgrs0" publicId={photo.photo} />
                <h4>Posted By:</h4><h4>{userState.name}</h4>
                {photo.userId === parseInt(sessionStorage.getItem("drifting_user")) ? <button className="tasks-delete" onClick={() => { handleDelete(photo.id) }}>Delete</button> : null}
            </div>
        </div>
    )


}