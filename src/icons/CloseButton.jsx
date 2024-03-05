import close from '../assets/Cerrar.png'
import { MoviesContext } from '../context/MoviesContext'
import { useContext } from 'react'

export const CloseButton = ()=>{

    const {setShowMenu}=useContext(MoviesContext)

    return(
        <img className="close-menu-button" onClick={()=>{setShowMenu(prevState=>!prevState)}} src={close} alt="Close Menu Button" />
    )
}