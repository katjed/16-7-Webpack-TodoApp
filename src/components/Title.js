import React from 'react';
import style from './Title.css';

const Title = props => (
     <div className={style.Title}>
        <h1>To do ({props.number})</h1>
    </div>
) 

export default Title;


