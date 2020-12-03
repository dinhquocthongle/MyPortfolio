import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'
import Nav from './menu'
import About from './about'
import Projects from './projects'

const Setup = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
      </Switch>
    </Router>
  )
}

export default Setup
