
import React,{ Component } from'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './Counter.css'
import { Container } from 'react-bootstrap';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count :0,
        };
    }
increment =()=>{
    this.setState({ count: this.state.count + 1});
};
decrement =()=>{
    this.setState({ count: this.state.count - 1})
};  
reset=()=>{
    this.setState({count: this.state.count = 0})
}
render(){
    return(
        <>
               
        <Container className='Container-Count'>
            <Container className='Mini-Container m-5 p-3'> 
             <Container className='Counter pt-3'>
            <h1>Simple Counter</h1>
                
          <h1 className='head'>{this.state.count}</h1> 
          

       <div className='buttons-group'> 
         <button className='button1'  onClick={this.decrement}><RemoveIcon/></button>    
      <button className='button2'  type='reset' onClick={this.reset}><RestartAltIcon/></button>

         <button className='button3' onClick={this.increment}><AddCircleOutlineIcon/></button>
                
           </div></Container> 
           </Container>
     </Container> 
       
        </> 
    )
}

}

export default Counter;
