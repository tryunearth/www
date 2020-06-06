import React from 'react'
import { Router } from '@reach/router'

import { Home, About, NotFound } from './pages'
import './App.css'

const App = () => (
  <Router>
    <NotFound default />
    <Home exact path='/' />
    <About path='/about' />
  </Router>
)

export default App
