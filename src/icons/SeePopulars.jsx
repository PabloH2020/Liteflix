import { useState } from 'react'
import added from '../assets/addedStrong.png'
import { MoviesContext } from '../context/MoviesContext';
import { useContext } from 'react';
import { ScrollArrow } from './ScrollArrow';

export const VerPopulares = ()=>{
    const [dropdownState,setDropdownState] = useState(false)
    const {togglePopulars,setTogglePopulars,toggleMine,setToggleMine} = useContext(MoviesContext);
    
    const handleTogglePopulars = ()=>{
        setTogglePopulars(true)
        setToggleMine(false)
    }
    const handleToggleMine = ()=>{
        setTogglePopulars(false)
        setToggleMine(true)
    }
    
    return(
        <div className="populares-title-container">
            {togglePopulars ? (<p onClick={()=>{setDropdownState(prevState=>!prevState)}} className="ver-populares">VER :<b>POPULARES</b><ScrollArrow/></p>) : (<p onClick={()=>{setDropdownState(prevState=>!prevState)}} className="ver-populares">VER :<b>MIS PELICULAS</b><ScrollArrow/></p>)}
            {dropdownState && <div onClick={()=>{setDropdownState(prevState=>!prevState)}} className="populares-dropdown">
                    <div onClick={handleTogglePopulars}><p>POPULARES</p>{togglePopulars && <img className="added-tick" src={added} alt="Added Icon button" />}</div>
                    <div className="mymovies-text-container" onClick={handleToggleMine}><p>MIS PELICULAS</p>{toggleMine && <img className="added-tick" src={added} alt="Added Icon button" />}</div>
                    <div className="notch-dropdown"></div>
                </div>}
         </div> 
        
    )
}