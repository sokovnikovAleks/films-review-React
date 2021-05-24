import React from 'react';
import classes from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <div className={classes.container}>
      <NavLink to={'/best'} className={classes.link} activeClassName={classes.activeLink} >Лучшие</NavLink>
      <NavLink to={'/popular'} className={classes.link} activeClassName={classes.activeLink} >Популярные</NavLink>
      <NavLink to={'/awaited'} className={classes.link} activeClassName={classes.activeLink} >Ожидаемые</NavLink>
    </div>
  );
};

export default Menu;