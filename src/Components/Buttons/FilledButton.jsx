import React from 'react';
import styles from '../../CSS/button.module.css';

const FilledButton= (props)=> {

    return (
        <button className={`${styles.container} ${props.enable? styles.enable: styles.disable}`} onClick={(e)=> e.preventDefault()} onClick={()=> props.onClick()}>
            {props.text}
        </button>
    );
};

export default FilledButton;