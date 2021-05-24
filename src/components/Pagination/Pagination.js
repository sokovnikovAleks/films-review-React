import React from 'react';
import classes from './Pagination.module.css'

const Pagination = ({currentPage, totalPages, setCurrentPage}) => {
  const pages = []

  const pageCreator = (pages, totalPages, currentPage) => {
      if(totalPages > 10) {
        if(currentPage > 5) {
          for (let i = currentPage-4; i <= currentPage+5; i++) {
            pages.push(i)
            if(i === totalPages) break
          }
        }
        else {
          for (let i = 1; i <= 10; i++) {
            pages.push(i)
            if(i === totalPages) break
          }
        }
      }  else {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i)
        }
      }
  }

  pageCreator(pages, totalPages, currentPage)

  return (
    <div className={classes.container}>
      { pages.map(item => <button onClick={() => setCurrentPage(item)}  key={item} className={item === currentPage ? classes.currentPage : classes.page }>{item}</button>)}
    </div>
  );
};

export default Pagination;