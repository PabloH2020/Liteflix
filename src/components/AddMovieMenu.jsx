import { CloseButtonNoFunction } from "../icons/CloseButtonNoFunction"
import { MoviesContext } from '../context/MoviesContext'
import { useContext } from 'react'
import { LoadFileForm } from "./LoadFileForm"
import {LiteflixIcon} from "../icons/LiteflixIcon"

export const AddMovieMenu = ()=>{

    const {setShowAddMovieMenu,apiResponse}=useContext(MoviesContext)


    return(
        <aside className="add-movie-menu">
            <div onClick={()=>{setShowAddMovieMenu(prevState=>!prevState)}} className="close-add-movie-menu"><CloseButtonNoFunction/></div>
            {apiResponse ? <div className="liteflix-icon-add-menu"><LiteflixIcon/></div> : <p className="add-movietitle">AGREGAR PELICULA</p>}
            <LoadFileForm/>
        </aside>
    )
}