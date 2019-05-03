import "../css/ImageList.css";
import React from 'react';
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //console.log(props.images);
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}/>
  });
  return(
  <div>
     <h3>Images</h3>
    <div className="image-list">{images}</div>
   </div>
  )
}

export default ImageList;