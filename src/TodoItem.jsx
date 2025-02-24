import React, {useState} from 'react';
import styles from './Modules/TodoItem.module.css';

const TodoItem = ({todo, updateTodo, deleteTodo}) =>{
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () =>{
        updateTodo(todo.id, newText);
        setIsEditing(false);
    };

    return(
        <li className={styles.item}>
          {isEditing ? (
        <div className={styles.editItem}>
          <input className={styles.editTextInput} value={newText} onChange={(e) => setNewText(e.target.value)} />
          <i className={`fa-regular fa-floppy-disk ${styles.saveIcon}`} onClick={handleEdit}></i>
          </div>
      ) : (
        <div className={styles.itemUnedited}>
          <span>{todo.text}</span>
          <div className={styles.modifyContainer}>
            <i className="fa-solid fa-pencil" onClick={() => setIsEditing(true)} style={{color:"hsl(199, 100.00%, 50.00%)"}}></i>
            <i className="fa-solid fa-trash" onClick={() => deleteTodo(todo.id)} style={{color:"red"}}></i>
          </div>
         
        </div>
      )}
    </li>
    );
}

export default TodoItem;