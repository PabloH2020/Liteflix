import menu from '../assets/Menu.png'
import { MoviesContext } from '../context/MoviesContext'
import { useContext } from 'react'

export const MenuIcon = ()=>{

    const {setShowMenu}=useContext(MoviesContext)

    return(
        <img className="menu-icon-button absolute left-[8%] md:!relative"  onClick={()=>{setShowMenu(prevState=>!prevState)}} src={menu} alt="user options Menu" />
    )
}