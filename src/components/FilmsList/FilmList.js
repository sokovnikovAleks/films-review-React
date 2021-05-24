import React, {useCallback, useEffect, useState} from 'react';
import classes from './FilmList.module.css'
import filmsApi from "../../api/filmsApi";
import FilmInList from "../FilmInList/FilmInList";
import Pagination from "../Pagination/Pagination";

const FilmList = ({type}) => {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchType, setSearchType] = useState(type)

  const fetchFilms = useCallback( async () => {
    window.scrollTo(0, 0)
    setLoading(true)
    const res = await filmsApi.getFilms(searchType, currentPage)
    setFilms(res.data.films)
    setTotalPages(res.data.pagesCount)
    setLoading(false)
  }, [searchType, currentPage])

  useEffect(() => {
    setSearchType(type)
    setCurrentPage(1)
  }, [type])

  useEffect( () => {
    fetchFilms()
  }, [currentPage, searchType, fetchFilms])

  console.log(type, searchType)
  if (loading) {
    return (
      <div className={classes.container}>
        <h2>Загрузка...</h2>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      { films ?
        <>
         {films.map(film => <FilmInList key={film.filmId} {...film} />)}
         <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
        </>
        : <span>Не найдено...</span>}
    </div>
  );
};

export default FilmList;