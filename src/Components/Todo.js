import React, { Component } from 'react';
import './Todo.css'
import EditSharpIcon from '@mui/icons-material/EditSharp';
import BeenhereSharpIcon from '@mui/icons-material/BeenhereSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button} from 'react-bootstrap';
import { Input } from '@mui/material';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      editIndex: -1, 
      editedTodo: '' 
    }; 
  }
  addTodo = () => {
    const { todos, newTodo } = this.state;
    if (newTodo.trim() !== '') {
      this.setState({
        todos: [...todos, newTodo],
        newTodo: ''
      });
    }
  };

  handleDelete = (index) =>{
    const { todos  } = this.state;

    const updateTodo = todos.filter(( _, i ) => i !== index )

    this.setState({ todos: updateTodo})

  }

  handleEditSave  =(index) => {
    const {todos, editedTodo } = this.state;
        const updatedTodos1 = todos.map((todo, i) => 
        i === index ?  editedTodo : todo );
        this.setState({ 
          todos: updatedTodos1,
          editIndex:-1,
        editedTodo:''
     })
  }
  editItem = (index) => {
    this.setState({
      editIndex: index,
      editedTodo: this.state.todos[index] 
    });
  }
  handleInputChange = event => {
    this.setState({
      newTodo: event.target.value
    });
  };
  render() {
    const { todos, newTodo , editedTodo} = this.state;
    return (<>
 
      <div className='Todo-Main'>
      
        
        <div className='Todo-Mini text-center rounded-top-4 rounded-bottom-3 mx-5'>
            <h1 className='rounded-top-4  heading'>TODO List</h1>

        <div className='Input1-Con p-3  rounded-4  mx-5 '>

              <Input className='Todo-input1  mb-2 m-3' placeholder='What would you like to do?' type="text" value={newTodo} onChange={this.handleInputChange} /><br/>
    
    <Button className='Todo-Button  m-2'onClick={this.addTodo}>Add Todo</Button>
    </div>
        <div className='Todo-inputs mb-5 rounded-4 py-3 mx-5'>
          <h3>Todo List</h3>
         <div className='list-Heading text-bg-light px-5 pt-3'>
          <p >List</p>           
          <div className='d-flex'>
          <p className=' dtext'>Delete</p>
          <p >Edit</p></div></div>
                                                        
        <ul className='Todo-Ul'> {todos.map((todo, index) => (
    <li  key={index}> 
     
     {this.state.editIndex === index ? (
      <>
    
      <Input className='Todo-Input2 m-3'placeholder='Enter the Changes' type='text' value={editedTodo} onChange={ (e) => this.setState({editedTodo:e.target.value})} />
    <button className='Todo-Sbtn' onClick={ ()=> this.handleEditSave(index)}><BeenhereSharpIcon/> </button>
      </>
     ):(
      <>
      <div className='Todo-MLi'>
        <div className='Todo-Li'>
  {todo}
 
  </div> <div>
   <button className='Todo-Dbtn '  onClick={()=> this.handleDelete(index) }><DeleteIcon/></button>
    <button  className='Todo-Ebtn 'onClick={() => this.editItem(index)}><EditSharpIcon/></button></div> </div>
      </>
     )}
       </li>
))}
</ul>
</div>
      </div></div>
      </>
    );
  }
  
}
export default Todo;