import React from 'react';
import styles from '../CSS/input.module.css';

const Input= (props) => {
    return (
        <input 
            type={props.type} 
            value={props.value}
            className={styles.input}
            placeholder={props.placeholder}
            onChange={e => props.setValue(`${e.target.value}` )} />
    );
}

export default Input;