import React from "react";
import { Image } from 'cloudinary-react'


export const PhotoCard = ({ photo }) => {



    return (
        <div className="card-task">
            <div className="task-card">
                <Image style={{ width: 250, height: 200 }} cloudName="dkchtgrs0" publicId={photo.photo} />
                <h4>{photo.userId}</h4>
            </div>
        </div>
    )


}