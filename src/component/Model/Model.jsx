import React,{useState} from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MydModalWithGrid(props) {
    return (
      <Modal {...props} 
      >
        <Modal.Header closeButton /> 
       
       
  <h1 style={{textAlign:'center'}}>
  Price/Stock Alert
  
  </h1>
       
        <Modal.Body className="show-grid">
        <p class="text-center" >Contextual text classes also work well on anchors 
        with the provided hover and focus states. 
        Note that the .text-white and .text-muted 
        class has no link styling. </p>
        <div  class="d-flex justify-content-center" >
        <img class="image-logo" style={{height:'2rem', width:'2rem'}} src="https://firewallforce.net/wp-content/uploads/2020/06/fw-icon-300x300.png" alt=""/>
        <h6 class="text-danger text-center">FireWallForce</h6>
        </div>

          
    <div style={{padding:'2%',  textAlign:'center'}}>
    <input class="rounded-pill" style={{width:'50%', borderColor:'red'}}/>
    </div>
    <div style={{padding:'2%',  textAlign:'center'}}>
    <input class="rounded-pill" style={{width:'50%', borderColor:'red'}}/>
    </div>
    
    
        </Modal.Body>
        <div style={{paddingBottom:'5%',  textAlign:'center', alignSelf:'center'}}>
          <Button onClick={props.onHide}>Submit</Button>
        </div>
      </Modal>
    );
  }
  
  function Model() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <div style={{height:'50vh', textAlign:'center'}}>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch a Modal 
        </Button>
  
        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    );
  }
  
 export default Model