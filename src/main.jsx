// import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import { MoviesProvider } from './context/MoviesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MoviesProvider>
    <App />
  </MoviesProvider>,
)
