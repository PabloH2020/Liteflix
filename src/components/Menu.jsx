import {NotificationBell} from '../icons/NotificationBell'
import {UserProfile} from '../icons/UserProfile'
import { CloseButton } from '../icons/CloseButton'
import {AddMovieIconMenu} from '../icons/AddMovieIconMenu'
import { MoviesContext } from '../context/MoviesContext'
import { useContext } from 'react'
import { AddMovieMenu } from './AddMovieMenu'
import { LiteflixIcon } from '../icons/LiteflixIcon'

export const Menu = ()=>{

    const {showAddMovieMenu,setShowAddMovieMenu}=useContext(MoviesContext)
    
    const toggleOpenAddMovieMenu = ()=>{
        setShowAddMovieMenu(prevState=>!prevState)
    }

    return(
        <section className="menu-top-container">
            <div className="top-menu-profile">
                <CloseButton/>
                <LiteflixIcon/>
                <div className="user-options-menu">
                <NotificationBell/>
                <UserProfile/>            
                </div>
            </div>
            <ul className="menu-options-list">
                <li>INICIO</li>
                <li>SERIES</li>
                <li>PELICULAS</li>
                <li>AGREGADAS RECIENTEMENTE</li>
                <li>POPULARES</li>
                <li>MIS PELICULAS</li>
                <li>MI LISTA</li>
                <li style={{marginTop:'.8rem',marginBottom:'.8rem'}} onClick={toggleOpenAddMovieMenu}><AddMovieIconMenu/></li>
                <li>CERRAR SESIÓN</li>
            </ul>
            { showAddMovieMenu && <AddMovieMenu/>}
        </section>
    )
}