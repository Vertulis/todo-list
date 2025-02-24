import React, {useState} from 'react';
import styles from './Modules/TodoForm.module.css'

const TodoForm = ({addTodo}) =>{
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()){
            return;
        }
        addTodo(text);
        setText("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' className={styles.textInput}
            placeholder='Add new task...'
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button className={styles.addBtn} type='submit'>Add</button>
        </form>
    );
};

export default TodoForm;