import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function Trailer({movies}) {
    const navigate = useNavigate();
    const {id}=useParams();
    const movie= movies.find((movie)=>movie.id===Number(id))
    const [loading, setLoading]=useState(false)
  return (
    <div>{
        loading ? <Navigate to="/"/> : <div className='Trailer' >
            <p className='Trailerdescription ' > {movie.description}</p>
           <p style={{margin:'auto'}}> <iframe width="560" height="315" 
                src={movie. frameUrl
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
                </p>
            <Button variant="secondary"style={{margin:'auto',padding:"10px"}}
                onClick={
                    () => navigate(-1)
            }>
                go back
            </Button>
        </div>
    }</div>
  )
}

export default Trailer