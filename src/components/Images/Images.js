import React, {useState} from 'react';
import classes from './Images.module.css'
import ModalImage from "../ModalImage/ModalImage";

const Images = ({images}) => {
  const [showModal, setShowModal] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  const openModal = (index) => {
    setCurrentImage(index)
    setShowModal(true)
  }


  return (
    <div className={classes.container}>
      {images.map((item, index) => {
        return (
          <div className={classes.imgContainer} key={item.preview} onClick={() => openModal(index)}>
            <img className={classes.img} src={item.preview} alt="фото фильма"/>
          </div>
        )
      })}
      {showModal ? <ModalImage closeModal={() =>setShowModal(false)} currentImage={currentImage} images={images} /> : null}
    </div>
  );
};

export default Images;