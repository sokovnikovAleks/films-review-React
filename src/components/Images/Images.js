import React, {useEffect, useState} from 'react';
import classes from './Images.module.css'
import ModalImage from "../ModalImage/ModalImage";

const Images = ({images}) => {
  const [btnTitle, setBtnTitle] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const [shownImages, setShownImages] = useState([])
  const [showAllImages, setShowAllImages] = useState(false)

  useEffect(() => {
    setShownImages(() => images.slice(0, 5))
    if (images.length > 5) {
      setBtnTitle('Показать все')
    }
  }, [])

  useEffect(() => {
    if(showAllImages) {
      setShownImages(images)
      setBtnTitle('Скрыть')
    } else if(!showAllImages && images.length > 5) {
      setShownImages(() => images.slice(0, 5))
      setBtnTitle('Показать все')
    }
  }, [showAllImages])

  const openModal = (index) => {
    setCurrentImage(index)
    setShowModal(true)
  }


  return (
    <div className={classes.container}>

      <div className={classes.imagesContainer}>
        {shownImages.map((item, index) => {
          return (
            <div className={classes.imgContainer} key={item.preview} onClick={() => openModal(index)}>
              <img className={classes.img} src={item.preview} alt="фото фильма"/>
            </div>
          )
        })}
      </div>

      {btnTitle
        ? <button className={classes.showBtn} onClick={() => setShowAllImages(prev => !prev)}>{btnTitle}</button>
        : null
      }

      {showModal ? <ModalImage closeModal={() =>setShowModal(false)} currentImage={currentImage} images={images} /> : null}
    </div>
  );
};

export default Images;