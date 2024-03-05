import { useCallback,  useState , useEffect } from "react"
import { useDropzone } from "react-dropzone"
import {ClipIcon} from "../icons/Clip"
import { MoviesContext } from '../context/MoviesContext'
import { useContext } from 'react'
import axios from 'axios';
import { MovieUploaded } from "./MovieUploaded"
import { uploadFile } from "../firebase/config"

export const LoadFileForm = ()=>{

    const {showCongrats,setShowCongrats,file,setFile,setApiResponse,setShowAddMovieMenu,setMyMovieList}=useContext(MoviesContext)
    const [movieTitle,setMovieTitle] = useState()
    const [uploadPerc,setUploadPerc] = useState(0)
    const [apiResult,setApiResult] = useState()
    

    

    const onDrop = useCallback((acceptedFiles)=>{
            console.log(acceptedFiles)
            setFile(acceptedFiles[0])
    },[setFile])

    const {getRootProps,getInputProps, isDragActive , acceptedFiles} = useDropzone({onDrop})
    
    const tenthsArray = [0,10,20,30,40,50,60,70,80,90,100];


    const handleSubmit = async (event)=>{
        event.preventDefault();
        setApiResult('inprogress');
        
         setFile(acceptedFiles[0])
        console.log(acceptedFiles[0])
          const storageUrlRef = await uploadFile(acceptedFiles[0])
        let formData = new FormData()
        formData.append('titulo',movieTitle)
        formData.append('imagen',storageUrlRef)

        const progressBar = document.getElementsByClassName('progress-bar')[0]
        const myInterval = setInterval(() => {
            const computedStyle = getComputedStyle(progressBar)
            const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
            
            if(tenthsArray.includes(width + 1))setUploadPerc(width + 1)
            
            // setUploadPerc(width + 1)
            progressBar.style.setProperty('--width', width + 1)
            console.log(uploadPerc)
            if(width==100){
                clearInterval(myInterval)
            }
          }, 5)

          
           axios.post(`${import.meta.env.VITE_GET_MY_DATA_URL}/movieUpload`,[{titulo:movieTitle,imagen:storageUrlRef}]).then(res=>{
            console.log(res)
            
            setApiResponse(prevState=>!prevState)
            setFile(null)
            setApiResult('success')
            
            setTimeout(()=>{
                setShowCongrats(prevState=>!prevState)
            },5000)
        }).catch(e=>{
            console.log(e.message)
            setApiResult('error')
            throw e;
        })   
                 

    }

    const handleRetry = ()=>{
        let progressBar = document.getElementsByClassName("progress-bar")[0];
        progressBar.style.setProperty('--width','0')
        setUploadPerc(0)
        setApiResponse(null)
        setApiResult(null)
        setFile(null)
        setMovieTitle('')
    }

    return(
        <form className="add-movie-form" action="" onSubmit={handleSubmit}>

           {(0<uploadPerc<100 && !showCongrats) && <div className="progress-bar" style={{'--width':'0','--background-color':(apiResult=='error' && uploadPerc==100) ? 'red' : '#64EEBC' }} >
                {(uploadPerc==100 && apiResult!='error') ?  (<p className="loading-percentage-text">100% CARGADO</p>) : (apiResult!='error' ? (<p className="loading-percentage-text">CARGANDO {uploadPerc} %</p>) : (<p className="loading-percentage-text"><b>¡ERROR!</b> NO SE PUDO CARGAR LA PELICULA</p>))}
                <div className="progress-bar-back" style={{'--width':'0'}} ></div>
                {uploadPerc!=100 ? (<p className="cancel-upload-text">CANCELAR</p>) : null}
                {(uploadPerc==100 & apiResult=='success') ? (<p className="success-upload-text">¡LISTO!</p>) : null }
                {(uploadPerc==100 & apiResult=='error') ? (<p onClick={handleRetry} className="error-upload-text">REINTENTAR</p>) : null }
            </div>  }         
            {showCongrats && <MovieUploaded uploadedMovieTitle={movieTitle}/>}
            {(uploadPerc==0) ? (<div className="drag-zone-container">
                <div className="agrega-archivo" {...getRootProps()}>
                {file && <p className="user-input-file">{file.path}</p>}
                    <input {...getInputProps()}/>
                 {isDragActive  ? (<div className="drag-drop-zone"><ClipIcon/><p></p></div>) :
                    (<div className="drag-drop-zone"><ClipIcon/><p></p></div>)}
                </div>
                
          </div>) : (<div style={{border:'none',minHeight:'150px'}} className="drag-zone-container">
                <div style={{border:'none',justifyItems:'center',alignItems:'center',justifyContent:'center'}} className="agrega-archivo" >
                {!showCongrats && <div className="movie-title-box">
                    <input defaultValue={movieTitle} type="text"  /> 
                </div>}
                </div>
                
          </div>)}
          {(uploadPerc==0) && <div className="movie-title-box">
                    <input onChange={(event)=>setMovieTitle(event.target.value)} type="text" placeholder="TÍTULO" /> 
            </div>}
          {!showCongrats ? (<button className="subir-pelicula">SUBIR PELICULA</button>) : (<button onClick={(e)=>e.preventDefault()} className="volver-a-home">IR A HOME</button>)}
          <button onClick={()=>setShowAddMovieMenu(prevState=>!prevState)} className="salir-menu-pelicula">SALIR</button>
        </form>
    )
}