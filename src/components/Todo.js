import React from 'react';
import style from './Todo.css';

const Todo = props => (  // ???
	<li className={style.Todo}>
		<p>{props.data.text}</p>
		<button onClick={() => props.removeTodo(props.data.id)}>x</button>
	</li>
);

export default Todo;