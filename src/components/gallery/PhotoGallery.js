import React, { useEffect, useState } from "react";
import "./PhotoGallery.css"
import Axios from "axios";
import { addPhoto, getPhotos } from "./PhotoGalleryManager";
import { PhotoCard } from "./PhotoGalleryCard";



export const PhotoGallery = () => {

  const [image, setImage] = useState();
  const [display, setDisplay] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const uploadImage = () => {

    const formData = new FormData()
    formData.append("file", image);
    formData.append("upload_preset", "cqgdwyau")
    setLoading(true);

    Axios.post("https://api.cloudinary.com/v1_1/dkchtgrs0/image/upload", formData)
      .then((response) => {
        // debugger;
        const photoInd = {
          userId: parseInt(sessionStorage.getItem("drifting_user")),
          photo: response.data.url
        }
        addPhoto(photoInd).then(() => {
          displayPhotos();
        });

        setLoading(false);
      })
  }

  const displayPhotos = () => {
    getPhotos()
      .then(res => {
        console.log(res);
        console.log("display");
        setDisplay(res);

      })
  }

  useEffect(() => {
    displayPhotos();
  }, [])


  return (
    <>
      <div className="main-content">
        <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
        <button onClick={uploadImage}>Upload Image</button>
        <div className="gallery">

          {display.map(image => <PhotoCard key={image.id} photo={image} />)}

        </div>

      </div>
    </>
  )
}