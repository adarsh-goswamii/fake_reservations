import React from 'react';
import styles from '../CSS/booking.module.css';
import { MdDelete } from 'react-icons/md';

const Booking= (props)=> {
    return (
        <div className={styles.container} >
            <p className={styles.text}>{`${props.src} to ${props.dst}`}</p>
            <p className={styles.text}>{props.date}</p>
            <MdDelete className={styles.delete}/>
        </div>
    );
};

export default Booking;