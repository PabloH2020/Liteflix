/* eslint-disable react/prop-types */
import {useEffect, createContext ,useState} from "react";
import mockMovies from '../mock/movies.json';
import destacadas from '../mock/destacadas.json';
import axios from 'axios'
import { uploadFile } from "../firebase/config";


export const MoviesContext = createContext();

export const MoviesProvider = ({children})=>{

const rateDestacadas = destacadas.results.map(movie=>movie.vote_average);
const maxRate= rateDestacadas.reduce((a,b)=>Math.max(a,b));
const destacada = destacadas.results.filter(movie=>movie.vote_average == maxRate)[0];
const destacadaUrl = `https://image.tmdb.org/t/p/original${destacada.poster_path}`;
const movieList = mockMovies.results ? mockMovies.results : [];
const movies = window.localStorage.getItem('listaPeliculas') ? JSON.parse(window.localStorage.getItem('listaPeliculas')) : movieList;
const [filteredMovieList,setFilteredMovieList] = useState(movies)
const [myMovieList,setMyMovieList] = useState()
const [peliculaDestacada,setPeliculaDestacada] = useState(destacada)
const [sliceStart,setSliceStart] = useState(0)
const [showMenu,setShowMenu] = useState(false)
const [showAddMovieMenu,setShowAddMovieMenu] = useState(false)
const[file,setFile]=useState()
const [apiResponse,setApiResponse] = useState(false)
const [togglePopulars,setTogglePopulars] = useState(true)
const [toggleMine,setToggleMine] = useState(false)
const [showCongrats,setShowCongrats] = useState(false)

useEffect(()=>{
    axios.get(`${import.meta.env.VITE_GET_MY_DATA_URL}/getMyMovies`).then(res=>{

            console.log([...res.data.movies])
            if(res.data.movies){
                
            setMyMovieList(res.data.movies)
            }
           
        }).catch(e=>{
            console.log(e.message)
            throw e;
        })

     
},[showMenu,setShowMenu])

useEffect(()=>{
    if(!window.localStorage.getItem('listaPeliculas')){
        window.localStorage.setItem('listaPeliculas',JSON.stringify(filteredMovieList))
    }
    console.log("New filtered movie list",filteredMovieList)

},[filteredMovieList])

const handleScrollRight =()=>{
    if((sliceStart+4)>=filteredMovieList.length)return
    setSliceStart(prevState=>prevState+1)
   
}
const handleScrollLeft =()=>{
    if(sliceStart==0)return
    setSliceStart(prevState=>prevState-1)
}

    return(
        <MoviesContext.Provider value={{showCongrats,setShowCongrats,toggleMine,setToggleMine,togglePopulars,setTogglePopulars,myMovieList,apiResponse,setApiResponse,file,setFile,setShowAddMovieMenu,showAddMovieMenu,showMenu,setShowMenu,handleScrollLeft,handleScrollRight,filteredMovieList,sliceStart,setSliceStart,setFilteredMovieList,destacadaUrl,peliculaDestacada,setPeliculaDestacada}}>
            {children}
        </MoviesContext.Provider>    
    )
}