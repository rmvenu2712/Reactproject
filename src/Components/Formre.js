
import { useState } from "react";
import './Form.css'
import Formimg from './Formimg.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from "react-bootstrap";


function Formre(){
   const[text,setText]=useState("");
   const[terror,setTerror]=useState("");

   const[pass,setPass]=useState("");
   const[perror,setPerror]=useState("");

   const[cpass,setCpass]=useState("");
   const[cperror,setCperror]=useState("");

   const[num,setNum]=useState("");
   const[nerror,setNerror]=useState("");

   const[mail,setMail]=useState("");
   const[merror,setMerror]=useState("");

const myClick=(event) =>{
  
 if (text == ""){
      setTerror("Enter the value")   
    }
    if(num==""){
      setNerror("Enter the Ph.Number")
    }
    if(mail==""){
      setMerror("Invalid email address")
   }
    if(pass.trim()<8){
      setPerror( "Password must be at least 8 characters")
   }
   // if(pass!==cpass){
   //    setCpass("Password is not matched")
   // }
    
    else{
      alert(`
           Username :  ${text} ,
              Phone No : ${num},
              Email :${mail},
              Password:${pass},
              Confirm Password:${cpass}
              
              Check your details and Click Ok`)
                    setTerror("")   
                   setText("") 
                   setPass("")
                    setPerror("")       
                   setCpass("")
                   setCperror("")       
                  setNum("")
                  setNerror("")       
                 setMail("")
                setMerror("")     
    }
   
}
 return(
  <> 
    
     <div className="Main-Con" >
     <Form.Group  >
      <Row>
        <Col sm={6} >
        <Row className="p-5 m-5  bg-light Main-Form">
          <h3 className="text-center text-secondary" >Validation Form</h3>

     {/* Name---- */}
          <Col className="m-3" xs={12}><Form.Control type="text" placeholder="Enter Name"onChange={(e)=>setText(e.target.value)}value={text}/>
          <span className="error">{terror}</span></Col>
          

      {/* Number ----*/}
          <Col className="m-3" xs={12} ><Form.Control type="number" placeholder="Ph.no" onChange={(e)=>setNum(e.target.value)} value={num}/>
          <span  className="error">{nerror}</span></Col>

       {/* Email----- */}
          <Col  className="m-3" xs={12}><Form.Control type="email" placeholder="@gmail.com"onChange={(e)=>setMail(e.target.value)} value={mail}/>
          <span className="error">{merror}</span></Col>
          
     {/* Password------ */}
          <Col className="m-3" xs={12} ><Form.Control type="Password" placeholder="Create password"onChange={(e)=>setPass(e.target.value)}value={pass} />
          <span className="error">{perror}</span></Col>

    {/* Confirm Password---- */}
          <Col className="m-3" xs={12} ><Form.Control type="Password" placeholder="Confirm Password"onChange={(e)=>setCpass(e.target.value)}value={cpass} />
          <span className="error">{cperror}</span></Col>

    {/* BUtton---- */}
          <Col xs={12} ><Button className="ms-5 px-5" variant="outline-primary "onClick={myClick}>Submit</Button>{' '}</Col> 
       </Row></Col> 
       <Col sm={6}> 
             <img className="Form-Img" src={Formimg}></img>
        </Col>
        </Row>
      </Form.Group>
      </div>
      
    </>
   
 )
} export default Formre;