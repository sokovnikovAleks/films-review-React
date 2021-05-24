import React from 'react';
import classes from './FilmInLIst.module.css'
import {Link} from "react-router-dom";

const FilmInList = ({countries, filmId,
                      filmLength, genres,
                      nameEn, nameRu,
                      posterUrlPreview, rating,
                      ratingVoteCount, year,}) => {
  const countriesList = countries.map(item => item.country).join(', ')
  const genresList = genres.map(item => item.genre).join(', ')


  return (
    <div className={classes.container}>
      <img className={classes.img} src={posterUrlPreview} alt={nameRu}/>
      <div className={classes.data}>
        <div className={classes.flex}>
          <Link to={`/film/${filmId}`} className={classes.title} target={'_blank'}>{nameRu}</Link>
          <span className={classes.span}>Рейтинг кинопоиск: {rating}</span>
        </div>
        <span className={classes.span}>Оригинальное название: {nameEn ? nameEn : nameRu}</span>
        <span className={classes.span}>Жанр: {genresList}</span>
        <span className={classes.span}>Год: {year}</span>
        <span className={classes.span}>Длительность: {filmLength ? filmLength : '???'}</span>
        <span className={classes.span}>Проголосовало {ratingVoteCount} человек</span>
        <span className={classes.span}>{countriesList}</span>
      </div>
    </div>
  );
};

export default React.memo(FilmInList);