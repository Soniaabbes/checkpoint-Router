import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddFilm from './AddFilm'



function MovieList({movies, deleteMovie,movieT, movieRate, addMovie}) {
  const [text, setText]= useState("");
  const research=(e)=>{
      e.preventDefault();
      if (text == false ) {alert ("ecrire le nom du film ") }  else  {movieT(text) } ;
   };

  const [rate, setRate]= useState("");
  const researchRate=(e)=>{
      e.preventDefault();
      if (rate == false ) {alert ("le texte est vide  ") }  else  {movieRate(rate)} ;
   };

 
  return (
    <div className='listOfFilm'> 
    <p className='chooseFilm'>
               
               <>
                   <p className='addFilm'>
                       <AddFilm  addMovie={addMovie}/>
                   </p>
                   
                   <br/>
               
                   <p className='rateFilm'>
                       <Form  onSubmit={research} className='Forma'>
                       <Form.Control type="text" placeholder="Film" value={text} onChange={(e)=> setText(e.target.value)}/>
                       <Button variant="secondary" type='submit'>
                           see related movies</Button>
                           </Form>


                       <br/>

                   </p>
                   <p className='titleFilm'>
                       <Form onSubmit={researchRate} className='Forma'>
                       <Form.Control size="sm" type="text" placeholder="rate" value={rate} onChange={(e)=>setRate(e.target.value)}/>
                       <Button variant="secondary" type='submit'>
                           see related movies</Button>
                           </Form>

                   </p>
               </>
           </p>
    <div className='List'>{movies.map((movie)=> <MovieCard movie={movie} deleteMovie={deleteMovie} />
    )};</div>
  

     
    </div>
  )
}

export default MovieList