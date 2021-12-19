import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import styles from '../CSS/booking.module.css';
import { getUser } from '../store/action_creators';
import { deleteReservation } from '../store/action_creators';

const AdminBooking= (props)=> {
    const [email, setEmail]= useState(undefined);
    let dispatch= useDispatch();

    useEffect(async()=> {
        let data= await getUser(props.email)();
        setEmail(data.email);
    }, [props.email]);

    return (
        <div className={styles.container} >
            <p className={styles.text}>{`${props.src} to ${props.dst}`}</p>
            <p className={styles.text}>{props.date}</p>
            <p className={styles.text}>{email}</p>
            <MdDelete className={styles.delete} onClick={()=> deleteReservation(props.id, dispatch)()}/>
        </div>
    );
};

export default AdminBooking;