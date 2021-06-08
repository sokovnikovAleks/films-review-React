import React, {useEffect, useState} from 'react';
import FilmsApi from "../../api/filmsApi";
import classes from './Film.module.css'
import Images from "../Images/Images";

const Film = (props) => {

  const [film, setFilm] = useState(false)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        setLoading(true)
        const resFilm = await FilmsApi.getFilm(props.match.params.filmId)
        const resImages = await FilmsApi.getImagesById(props.match.params.filmId)
        setImages(resImages.data.frames)
        setFilm(resFilm.data.data)
        setLoading(false)
      } catch (e) {
        setFilm(false)
        setLoading(false)
        console.log('error: ',e)
      }

    }
    fetchFilm()
  }, [props.match.params.filmId])

  if (loading) {
    return (
      <div className={classes.container}><h2>Загрузка...</h2></div>
    )
  }

  if (!film && !loading) {
    return (
      <div className={classes.container}><h2>Упс... Что-то не так :(</h2></div>
    )
  }
  console.log(images)
  return (
    <div className={classes.flexColumn}>
      <div className={classes.flexRow}>
        <img className={classes.img} src={film.posterUrlPreview} alt={film.nameRu}/>
        <div className={classes.descr}>
          <h2>{film.nameRu}</h2>
          <span className={classes.gray}>{film.nameEn}</span>
          <span><span className={classes.gray}>Год: </span>{film.year}</span>
          <span><span className={classes.gray}>Слоган: </span>" {film.slogan} "</span>
          <span><span className={classes.gray}>Длительность: </span>{film.filmLength ? film.filmLength : '???'}</span>
          <span><span className={classes.gray}>Страна: </span>{film.countries.map(item => item.country).join(', ')}</span>
          <p>{film.description}</p>
        </div>
      </div>

      {images.length ? <Images images={images} /> : null}
    </div>
  );
};

export default Film;