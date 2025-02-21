import React, {useState} from 'react';

const TodoItem = ({todo, updateTodo, deleteTodo}) =>{
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () =>{
        updateTodo(todo.id, newText);
        setIsEditing(false);
    };

    return(
        <li>
          {isEditing ? (
        <>
          <input value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
    );
}

export default TodoItem;