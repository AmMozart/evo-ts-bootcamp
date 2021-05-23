import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Favorites } from './features/favorives/Favorites'
import { Mars } from './features/mars/Mars'
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <ul>
          <li><Link className={styles.link} to="/">Photos</Link></li>
          <li><Link className={styles.link} to="/Favorites">Favorites</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact>
          <Mars />
        </Route>

        <Route path="/Favorites">
          <Favorites />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App
