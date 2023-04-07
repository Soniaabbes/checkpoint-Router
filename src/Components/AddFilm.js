import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddFilm( {addMovie}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [titre,setTitre]=useState('')
  const [rate,setRate]=useState('')
  const [image,setImage]=useState('')
  const [video,setVideo]=useState('')
  const [description,setDesription]=useState('')
   //Handle Add
   const handleAdd = (e) => {
    e.preventDefault();
    if (titre && video&& image) {
      addMovie({  title: titre, description:description, posterUrl:image, rate:rate, frameUrl: video,id: Math.random()});
      setTitre("");
      setRate("");
      setImage("");
      setVideo("");
      setDesription("");
      handleClose();
    }
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Add Film to list 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> add film </Modal.Title>
        </Modal.Header>
        <Modal.Body >  
     <Form onSubmit={handleAdd}>
        <FormControl   onChange={(e)=>setTitre(e.target.value)} placeholder='Entrer le titre  du film' value ={titre} type='Text' />
          <FormControl  placeHolder='Entrer le posterUrl du film' value={image}  type='Text' onChange={(e)=>setImage(e.target.value)}/>
         <FormControl   placeHolder ='Entrer la classe du film ' value={rate} type='Number ' onChange={(e)=>setRate(e.target.value)}/>
          <FormControl placeHolder='Entrer frameUrl du film' value={video}  type='Text' onChange={(e)=>setVideo(e.target.value)}/>
         <FormControl placeHolder=' Entrer la description du film ' value={description} type='Text' onChange={(e)=>setDesription(e.target.value)}/>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}  type='submit'>
            Close
          </Button>
          <Button variant="primary"  onClick={handleAdd}>
            Add film 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddFilm