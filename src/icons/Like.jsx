import { useState } from 'react'
import like from '../assets/Like.png'
import likeFilled from '../assets/LikeFilled.png'

export const LikeIcon = ()=>{
    const [likeOn,setLikeOn] = useState(false)

    return(   
        <div>
            {!likeOn && <img onClick={()=>{setLikeOn(prevState=>!prevState)}} className="like-contenido-pelicula hidden" src={like} alt="Like Icon for Popular Movie"/> }
            {likeOn && <img onClick={()=>{setLikeOn(prevState=>!prevState)}} className="like-contenido-pelicula hidden" src={likeFilled} alt="Like Icon for Popular Movie"/> }
        </div>    
           
    )
}