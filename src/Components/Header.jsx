import React from 'react';
import styles from '../CSS/header.module.css';
import OutlineButton from './Buttons/OutlineButton';
import { logout } from '../store/functions';

const Header= (props)=> {
    return (
        <div className={styles.container}>
            <h2 className={styles.branding}>Fake Registration</h2>
            <h3 className={styles.middle}>{props.pageOnDisplay}</h3>
            <div className={styles.user_info}>
                <h3 className={styles.email}>admin@fake.com</h3>
                <OutlineButton text="Logout" enable={true} onClick={()=> logout()}/>
            </div>
        </div>
    );
}

export default Header;