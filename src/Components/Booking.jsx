import React from 'react';
import styles from '../CSS/booking.module.css';
import { MdDelete } from 'react-icons/md';
import { deleteReservation } from '../store/action_creators';
import { useDispatch } from 'react-redux';

const Booking= (props)=> {
    let dispatch= useDispatch();
    return (
        <div className={styles.container} >
            <p className={styles.text}>{`${props.src} to ${props.dst}`}</p>
            <p className={styles.text}>{props.date}</p>
            <MdDelete className={styles.delete} onClick={()=> deleteReservation(props.id, dispatch)()}/>
        </div>
    );
};

export default Booking;