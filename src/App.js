import React from 'react'
import { Router } from '@reach/router'

import { Home, About } from './pages'
import './App.css'

const App = () => (
  <Router>
    <Home exact path='/' />
    <About path='/about' />
  </Router>
)

export default App
