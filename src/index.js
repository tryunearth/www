import React from 'react'
import { hydrate, render } from 'react-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import './index.css'
import App from './App'
import theme from './theme'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
const app = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement)
} else {
  render(app, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
