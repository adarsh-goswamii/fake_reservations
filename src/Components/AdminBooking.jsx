import React, { useState, useEffect } from 'react';
import styles from '../CSS/booking.module.css';
import { getUser } from '../store/action_creators';

const AdminBooking= (props)=> {
    const [email, setEmail]= useState(undefined);

    useEffect(async()=> {
        let data= await getUser(props.email)();
        setEmail(data.email);
    }, [props.email]);

    return (
        <div className={styles.container} >
            <p className={styles.text}>{`${props.src} to ${props.dst}`}</p>
            <p className={styles.text}>{props.date}</p>
            <p className={styles.text}>{email}</p>
            {/* <MdDelete className={styles.delete}/> */}
        </div>
    );
};

export default AdminBooking;