import React, { useEffect, useState } from 'react';
import styles from '../CSS/login.module.css';
import OutlineButton from './Buttons/OutlineButton';
import Input from './Input';
import FilledButton from './Buttons/FilledButton';
import { useHistory } from 'react-router-dom';
import { checkEmail, LoginValid } from '../store/functions';
import { useDispatch } from 'react-redux';

const LoginCard = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let dispatch= useDispatch();
    let history= useHistory();

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <h1 className={styles.heading}>Login</h1>
                <div>
                    <Input type="text" placeholder="Email Address" setValue={setEmail}></Input>
                    <Input type="password" placeholder="Password" setValue={setPassword}></Input>
                </div>
                <div className={styles.btn_container}>
                    <p className={styles.link} onClick={() => history.push('/register')}>Forgot your password ?</p>
                    <FilledButton text="Login" enable={true} onClick={() => LoginValid(email.keyword, password.keyword, dispatch, history)()} />
                </div>
            </div>
            <div className={`${styles.info} ${styles.login_info}`}>
                <h1 className={styles.heading}>Welcome Back</h1>
                <p className={styles.para}>To keep connected with us please login with your personal info</p>

                <div className={styles.btn_container}>
                    <p className={styles.para}>Don't have an account ?</p>
                    <OutlineButton text='Register' enable={true} onClick={() => history.push('/register')} />
                </div>

            </div>
        </div>
    );
};

export default LoginCard;
