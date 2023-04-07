import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  Link } from 'react-router-dom'; 


function MovieCard({movie,deleteMovie}) {
  return (
    <div >
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text >
          {movie. description}
          <br/>
          {movie.rate}
        </Card.Text>
        <p style={{display:'flex', justifyContent:'space-around' }}>    
        <Button variant="secondary" onClick={()=>deleteMovie(movie.id)} style={{paddingBottom:'10px', paddingTop:'10px'}}>delete</Button>
       <Link to ={`/trailer/${movie.id}`}> <Button variant="secondary" >go to film</Button></Link>
        </p>
      </Card.Body>
    </Card>

    </div>
  )
}

export default MovieCard