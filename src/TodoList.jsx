import React from 'react';
import TodoItem from './TodoItem';
import styles from './Modules/TodoList.module.css'

const TodoList = ({todos, updateTodo, deleteTodo}) =>{
    return(
        <ul className={styles.list}>
            {todos.map((todo) =>(
                <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
};

export default TodoList;