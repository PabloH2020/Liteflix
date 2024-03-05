
export const handleCarouselEnter = (movie)=>{
    const contenidoHover = document.querySelector(`[id='${movie.id}'] .contenido-hover-pelicula`);
        const contenidoPelicula = document.querySelector(`[id='${movie.id}'] .contenido-pelicula`);
        const playImage = document.querySelector(`[id='${movie.id}'] .play-image`);
        const listaIcon = document.querySelector(`[id='${movie.id}'] .lista-contenido-pelicula`);
        const likeIcon = document.querySelector(`[id='${movie.id}'] .like-contenido-pelicula`);
        
        if(playImage) playImage.classList.add("play-image-hover");       
        if(contenidoPelicula) contenidoPelicula.classList.add("contenido-pelicula-hover");
        if(playImage) playImage.classList.remove("play-image");
        listaIcon.classList.remove("hidden");
        likeIcon.classList.remove("hidden");
        if(contenidoPelicula) contenidoPelicula.classList.remove("contenido-pelicula");       
        contenidoHover.classList.remove("hidden");
}

export const handleCarouselLeave = (movie)=>{
    const contenidoHover = document.querySelector(`[id='${movie.id}'] .contenido-hover-pelicula`);
        const contenidoPelicula = document.querySelector(`[id='${movie.id}'] .contenido-pelicula-hover`);
        const playImage = document.querySelector(`[id='${movie.id}'] .play-image-hover`);
        const listaIcon = document.querySelector(`[id='${movie.id}'] .lista-contenido-pelicula`);
        const likeIcon = document.querySelector(`[id='${movie.id}'] .like-contenido-pelicula`);
        
        if(playImage){playImage.classList.add("play-image");
        playImage.classList.remove("play-image-hover"); }
        if(contenidoPelicula){
        contenidoPelicula.classList.add("contenido-pelicula")       
        contenidoPelicula.classList.remove("contenido-pelicula-hover");
        }
        contenidoHover.classList.add("hidden");
        listaIcon.classList.add("hidden");
        likeIcon.classList.add("hidden");
        
}
