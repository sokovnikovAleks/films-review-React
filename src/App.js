import React from "react";
import './App.css';
import FilmList from "./components/FilmsList/FilmList";
import Menu from "./components/Menu/Menu";
import {Redirect, Route, Switch} from "react-router-dom";
import Film from "./components/Film/Film";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Menu />
        <Switch>
          <Route path={'/best'} render={() => <FilmList type={'TOP_250_BEST_FILMS'} />} />
          <Route path={'/popular'} render={() => <FilmList type={'TOP_100_POPULAR_FILMS'} />} />
          <Route path={'/awaited'} render={() => <FilmList type={'TOP_AWAIT_FILMS'} />} />
          <Route path={'/film/:filmId'}  component={Film}/>
          <Redirect from={'/'} to={'/best'} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
