import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => (	
	<ul className={style.TodoList}>
		{props.data.map(item => <Todo key={item.id} data={item} removeTodo={props.remove} />)}
	</ul>
);

export default TodoList;