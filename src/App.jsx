import './App.css'
import { NavBar } from './components/NavBar';
import { PeliculaDestacada } from './components/PeliculaDestacada';
import { MovieCarousel } from './components/MovieCarousel';
import { useContext } from 'react';
import { MoviesContext } from './context/MoviesContext';


function App() {

  
  const {peliculaDestacada,destacadaUrl} = useContext(MoviesContext);


  return (
    <>
      <main className="main-page" style={{backgroundImage:`url(${destacadaUrl})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <NavBar/>
        <section className="movies-display">
          <PeliculaDestacada peliculaDestacada={peliculaDestacada}/>
          <MovieCarousel/>
         
        </section>
      </main>
    </>
  )
}

export default App
