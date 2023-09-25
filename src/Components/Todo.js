import React, { Component } from 'react';
import './Todo.css'
import EditSharpIcon from '@mui/icons-material/EditSharp';
import BeenhereSharpIcon from '@mui/icons-material/BeenhereSharp';
import DeleteIcon from '@mui/icons-material/Delete';


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
        
        <div className='Todo-Mini'>
            <h1>Todo List</h1>
        <div className='Todo-inputs'>
         <input className='Todo-input1' placeholder='Add Todo' type="text" value={newTodo} onChange={this.handleInputChange} />
        <button className='Todo-Button'onClick={this.addTodo}>Add Todo</button>
        <ul className='Todo-Ul'> {todos.map((todo, index) => (
    <li  key={index}> 
     
     {this.state.editIndex === index ? (
      <>
    
      <input className='Todo-Input2'placeholder='Enter the Changes' type='text' value={editedTodo} onChange={ (e) => this.setState({editedTodo:e.target.value})} />
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