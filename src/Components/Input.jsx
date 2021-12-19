import React from 'react';
import styles from '../CSS/input.module.css';

const Input= (props) => {
    return (
        <input 
            type={props.type} 
            className={styles.input}
            placeholder={props.placeholder}
            onChange={e => props.setValue(prev => ({ ...prev, keyword: `${e.target.value}` }))} />
    );
}

export default Input;