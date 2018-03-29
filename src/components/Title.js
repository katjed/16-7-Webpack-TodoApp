import React from 'react';
import style from './Title.css';

const Title = props => (
    <div className={style.Title}>
        <h1>To do</h1>
        <p>Tasks: {props.number}</p>
    </div>
) 

export default Title;


