import { useState } from 'react'
import added from '../assets/Added.png'
import lista from '../assets/Lista.png'

export const ListaIcon = ()=>{
    const [listaOn,setListaOn] = useState(false)


    return(   
        <div>
            {!listaOn && <img onClick={()=>{setListaOn(prevState=>!prevState)}} className="lista-contenido-pelicula hidden" src={lista} alt="List Icon for Popular Movie"/>  }
            {listaOn && <img onClick={()=>{setListaOn(prevState=>!prevState)}} className="lista-contenido-pelicula hidden" src={added} alt="List Icon for Popular Movie"/> }
        </div>     
            
    )
}