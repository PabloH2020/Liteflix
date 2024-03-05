/* eslint-disable react/prop-types */
import { useContext} from 'react';
import {ScrollArrow} from '../icons/ScrollArrow'
import { VerPopulares } from '../icons/SeePopulars';
import { MoviesContext } from '../context/MoviesContext';
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {PlayIcon} from '../icons/Play';
import {StarIcon} from '../icons/Star'
import {ListaIcon} from '../icons/Lista'
import {LikeIcon} from '../icons/Like'
import { Pagination ,Navigation } from 'swiper/modules';
import { handleCarouselEnter,handleCarouselLeave } from '../services/functions';

export const MovieCarousel = ()=>{
    const {togglePopulars,toggleMine,myMovieList,filteredMovieList} = useContext(MoviesContext);
    
    const simulateBottomClick = ()=>{
        let bottom = document.getElementsByClassName('swiper-button-next')[0]
        bottom.click()
      }
      const simulateTopClick = ()=>{
        let bottom = document.getElementsByClassName('swiper-button-prev')[0]
        bottom.click()
      }

    return(      
        <div className="movies-populares">
            
                
                <div className="contenedor-titulo-controles">
                    <VerPopulares/>
                </div>

                
                <div className="carousel-container">
                        <button style={{display:(toggleMine && !myMovieList) ? 'none' : 'flex'}} className="prev-button flex justify-center" onClick={simulateTopClick}><ScrollArrow/></button>        
                            <div className="carousel-inside-container">     
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={window.innerHeight<600 ? 3 : 4}
                                pagination={{
                                type: 'fraction',
                                }}
                                spaceBetween={10}
                                navigation={true}
                                modules={[Pagination , Navigation]}
                                className="mySwiper"
                                
                            >  
                            {togglePopulars && filteredMovieList?.map(movie=>(
                                    <SwiperSlide id={movie.id} key={movie.id} onMouseOver={()=>handleCarouselEnter(movie)} onMouseOut={()=>handleCarouselLeave(movie)}>
                                        <img src={ movie.imagen ? `${import.meta.env.VITE_GET_MY_DATA_URL}/${movie.imagen}` : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  alt={`Preliminar movie image for ${movie.titulo ? movie.titulo : movie.title}`}/>
                                        <div className="contenido-pelicula">
                                            <PlayIcon/>
                                            <p>{movie.title}</p>
                                            <ListaIcon/>
                                            <LikeIcon/>
                                        </div>
                                        <div className="contenido-hover-pelicula hidden">
                                            <p className="resumen-pelicula">{movie.overview}</p>
                                            <div className="rating-and-year-info">
                                                <div>
                                                    <StarIcon/>
                                                    <p>{Math.round(movie.vote_average*10)/10}</p>
                                                </div>
                                                <p>{(new Date(movie.release_date)).getFullYear()}</p>
                                            </div>
                                        </div>	
                                    </SwiperSlide>
                            ))}
                             {toggleMine && myMovieList?.map(movie=>(
                                    <SwiperSlide id={movie.id} key={movie.id} onMouseOver={()=>handleCarouselEnter(movie)} onMouseOut={()=>handleCarouselLeave(movie)}>
                                        
                                        <img src={ movie.imagen ? movie.imagen : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  alt={`Preliminar movie image for ${movie.titulo ? movie.titulo : movie.title}`}/>
                                        <div className="contenido-pelicula">
                                            <PlayIcon/>
                                            <p>{movie.titulo}</p>
                                            <ListaIcon/>
                                            <LikeIcon/>
                                        </div>
                                        <div className="contenido-hover-pelicula hidden">
                                            
                                        </div>	
                                    </SwiperSlide>
                            ))}   
                            </Swiper>  
                               
                        </div>
                         <button style={{display:(toggleMine && !myMovieList) ? 'none' : 'flex'}} className="next-button  flex justify-center" onClick={simulateBottomClick}><ScrollArrow/></button>
                        </div>
                
                
            
        </div>
    )

    
    
}