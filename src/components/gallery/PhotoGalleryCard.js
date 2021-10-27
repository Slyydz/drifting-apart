import React, { useEffect, useState } from "react";
import { Image } from 'cloudinary-react';
import { getUserById } from "../upcoming/UpcomingEventManager";


export const PhotoCard = ({ photo }) => {

    const [userState, setUser] = useState({});

    const getUserDom = () => {
        getUserById(photo.userId).then((res) => setUser(res))
    }

    useEffect(() => {
        getUserDom();
    }, [])


    return (
        <div className="card-task">
            <div className="task-card">
                <Image style={{ width: 250, height: 200 }} cloudName="dkchtgrs0" publicId={photo.photo} />
                <h4>Posted By:</h4><h4>{userState.name}</h4>
            </div>
        </div>
    )


}