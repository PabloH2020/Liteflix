/* eslint-disable react/prop-types */

export const MovieUploaded = ({uploadedMovieTitle})=>{
    return(
        <div className="movie-uploaded">
            <p>FELICITACIONES!</p>
            <p><b>{uploadedMovieTitle}</b> FUE CORRECTAMENTE SUBIDA</p>
          </div>
    )
}