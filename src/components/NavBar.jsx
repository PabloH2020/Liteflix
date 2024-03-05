import { LiteflixIcon } from '../icons/LiteflixIcon'
import {AddMovieIcon} from '../icons/AddMovieIcon'
import {MenuIcon} from '../icons/MenuIcon'
import {NotificationBell} from '../icons/NotificationBell'
import {UserProfile} from '../icons/UserProfile'
import { Menu } from './Menu'
import { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'

export const NavBar = ()=>{
    
  const {showMenu,setShowMenu,setShowAddMovieMenu}=useContext(MoviesContext)
  const handleOpenBothMenus = ()=>{
    setShowMenu(prevState=>!prevState)
    setShowAddMovieMenu(prevState=>!prevState)
  }
    return(
        <nav className="liteflix-navbar">
          <div className="app-presentation">
            <LiteflixIcon/>
            <span onClick={handleOpenBothMenus}><AddMovieIcon/></span>
          </div>
          <div className="user-options">
              <MenuIcon/>
              <NotificationBell/>
              <UserProfile/>            
          </div>
          {showMenu && <Menu/>}
        </nav>
    )
}