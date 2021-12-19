import React, { useEffect, useState } from 'react';
import styles from '../CSS/header.module.css';
import OutlineButton from './Buttons/OutlineButton';
import { logout } from '../store/functions';
import { useSelector } from 'react-redux';
import { getUser } from '../store/action_creators';
import { useDispatch } from 'react-redux';

const Header= (props)=> {
    let {userId}= useSelector(state=> state.state);
    const [email, setEmail]= useState(undefined);
    let dispatch= useDispatch();

    useEffect(async()=> {
        let data= await getUser(userId)();
        setEmail(data.email);
    }, userId);

    return (
        <div className={styles.container}>
            <h2 className={styles.branding}>Fake Registration</h2>
            <h3 className={styles.middle}>{props.pageOnDisplay}</h3>
            <div className={styles.user_info}>
                <h3 className={styles.email}>{email}</h3>
                <OutlineButton text="Logout" enable={true} onClick={()=> logout(dispatch)}/>
            </div>
        </div>
    );
}

export default Header;