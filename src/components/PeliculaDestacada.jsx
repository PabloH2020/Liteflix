/* eslint-disable react/prop-types */
import {ArrowPoint} from '../icons/ArrowPoint'
import { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import lista from '../assets/Lista.png'

export const PeliculaDestacada = ()=>{
    
    const {peliculaDestacada} = useContext(MoviesContext);
    const movieArray = peliculaDestacada?.title.split(" ");
    const mitad = Math.round(movieArray.length / 2);
    const movieArray1 = movieArray ? movieArray?.splice(0,mitad) : peliculaDestacada.title;
    const movieArray2 = movieArray?.splice(0,movieArray.length)

    return(
        <div className="movie-destacada">
            <h3 className="text-white font-extralight">Original de <b className="font-semibold">LITEFLIX</b></h3>
            <h1 className="text-[#64EEBC]"><span className="destacada-text-1">{movieArray1?.join(" ")}</span><span className="destacada-text-2">{movieArray2?.join(" ")}</span></h1>
            <div className="action-buttons-destacada">
              <button><ArrowPoint/> <span className="reproducir-text">REPRODUCIR</span></button>
              <button><span></span><span></span><span></span><span></span><span className="lista-text"><img src={lista} alt="Icon to see Movie List"/>MI LISTA</span></button>
            </div>
        </div>
    )
}