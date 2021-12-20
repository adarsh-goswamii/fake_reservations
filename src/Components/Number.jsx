import React from 'react';
import styles from '../CSS/dashboard.module.css';

const Number= (props)=> {
    return (
        <p className={`${styles.number} ${props.currPage=== props.i? styles.active_page: ""}`} key={props.i} >{props.i}</p>
    );
};

export default Number;