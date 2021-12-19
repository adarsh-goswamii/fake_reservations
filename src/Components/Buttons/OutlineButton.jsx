import React from 'react';
import styles from '../../CSS/button.module.css';

const OutlineButton= (props)=> {
    return (
        <button className={`${styles.container} ${styles.outline} ${props.enable? styles.enable: styles.disable}`} onClick={(e)=> e.preventDefault()} onClick={()=> props.onClick()}>
            {props.text}
        </button>
    );
};

export default OutlineButton;