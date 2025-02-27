import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import styles from './Modules/App.module.css'

const App = () =>{
  const [todos, setTodos] = useState([]);

  const addTodo = (text) =>{
    const newTodo = {id:Date.now(), text, completed: false};
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, newText) =>{
    setTodos(todos.map(todo =>(todo.id === id? {...todo, text:newText} : todo)))
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return(
    <div className={styles.appContainer}>
      <h1 className={styles.heading}>To Do List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default App;