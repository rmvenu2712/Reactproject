
import { useState } from "react";
import './Form.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from "react-bootstrap";

function Formre(){
   const[text,setText]=useState("");
   const[pass,setPass]=useState("");
   const[area,setArea]=useState("");
   const[sel,setSel]=useState("");

const myClick=() =>{
      alert(` 
             Name     : ${text},
             Password : ${pass},
             Adress   : ${area},
             Number   : ${sel}` 
             );
             setText("")
             setPass("")
             setArea("")
   }
const tChange=(event)=>{
    setText(event.target.value)
}   
const pChange=(event)=>{
    setPass(event.target.value)
}   
const aChange=(event)=>{
    setArea(event.target.value)
}   

 return(
  <> 
     <Container className="Main-Con d-flex ">
     <Container className="p-2 Mini-Con md">
     <Form.Group className="mb-3">
        <Row>
          <h3 className="text-center" >Validation Form</h3>
          <Col className="px-4 py-2 pt-3" xs={12}><Form.Control type="text" placeholder="First Name"onChange={tChange} value={text}/></Col>

          <Col className="px-4 py-2 " xs={12} ><Form.Control type="text" placeholder="Last Name" /></Col>

          <Col className="px-4 py-2" xs={12} ><Form.Control type="number" placeholder="Ph.no" /></Col>

          <Col  className="px-4 py-2" xs={12}><Form.Control type="email" placeholder="@gmail.com"/></Col>
          
          <Col className="px-4 py-2" xs={12} ><Form.Control type="Password" placeholder="Password"onChange={pChange}value={pass} /></Col>
          <Col  className="px-4 py-2" xs={12} ><Form.Control as="textarea" placeholder="Adress"onChange={aChange} value={area}/></Col>
          <Col xs={12} className="px-4 pt-2"><Button  variant="outline-primary "onClick={myClick}>Submit</Button>{' '}</Col> 
       </Row>
      </Form.Group>
      </Container>
      </Container>
    </>
   
 )
} export default Formre;