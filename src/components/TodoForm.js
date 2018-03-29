import React from 'react';
import style from './TodoForm.css';

const TodoForm = props => ( 
	<form className={style.TodoForm} onSubmit={(e) => props.addTodo(e, e.target.querySelector('[name="task"]').value)}>		
		<input name="task" type="text" />
		<button>Add task</button>   
	</form>
);

export default TodoForm;