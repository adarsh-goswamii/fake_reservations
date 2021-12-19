import React from 'react';
import styles from '../CSS/login.module.css';
import LoginCard from '../Components/LoginCard';

const Login = () => {
    return (
        <div className={styles.login_page}>
                <h1 className={styles.branding}>Fake Registration</h1>
                <LoginCard />
        </div>
    );
}

export default Login;