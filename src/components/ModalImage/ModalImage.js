import React, {useState} from 'react';
import classes from './ModalImage.module.css'

const ModalImage = ({currentImage, images, closeModal}) => {

  const [indexOfImage, setIndexOfImage] = useState(currentImage)

  const prevImg = () => {
    if (indexOfImage === 0) {
      setIndexOfImage(images.length - 1)
    } else {
      setIndexOfImage(indexOfImage - 1)
    }
  }

  const nextImg = () => {
    if (indexOfImage === images.length - 1) {
      setIndexOfImage(0)
    } else {
      setIndexOfImage(indexOfImage + 1)
    }
  }


  console.log(images)

  return (
    <div className={classes.container}>
      <div className={classes.close} onClick={() => closeModal()}>&times;</div>
      <div className={classes.flexRow}>
        <div className={classes.arrows} onClick={prevImg}>&#9668;</div>
        <img className={classes.img} src={images[indexOfImage].image} alt="фото фильма"/>
        <div className={classes.arrows} onClick={nextImg}>&#9658;</div>
      </div>
    </div>
  );
};

export default ModalImage;