import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx'
import MovieCard from './MovieCard.jsx';
//import MoviesContainer from './MoviesContainer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MovieCard />
  </StrictMode>,
)
