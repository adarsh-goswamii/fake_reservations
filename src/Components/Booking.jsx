import React from 'react';
import styles from '../CSS/booking.module.css';
import { MdDelete } from 'react-icons/md';

const Booking= ()=> {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Delhi  to  Mumbai</p>
            <p className={styles.text}>12th August 2021</p>
            <MdDelete className={styles.delete}/>
        </div>
    );
};

export default Booking;