import React from 'react';
import styles from '../CSS/login.module.css';
import RegisterCard from '../Components/RegisterCard';

const Register= ()=> {
    return (
        <div className={styles.login_page}>
            <h1 className={styles.branding}>Fake Registration</h1>
            <RegisterCard />
        </div>
    );
}

export default Register;