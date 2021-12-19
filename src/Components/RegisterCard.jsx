import React, { useEffect, useState } from 'react';
import styles from '../CSS/login.module.css';
import Input from './Input';
import OutlineButton from './Buttons/OutlineButton';
import FilledButton from './Buttons/FilledButton';
import { motion } from 'framer-motion';
import { RegisterValid } from '../store/functions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const RegisterCard = () => {
    const [email, setEmail]= useState('');
    const [number, setNumber]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const history= useHistory();
    const dispatch= useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1 className={styles.heading}>Welcome</h1>
                <p className={styles.para}>Enter your personal details and start your journey with us.</p>

                <div className={styles.btn_container}>
                    <p className={styles.para}>Already have an account ?</p>
                    <OutlineButton text='Login' enable={true} onClick={()=> history.push('/login')}/>
                </div>
            </div>
            <div className={styles.input}>
                <h1 className={styles.heading}>Create an account</h1>
                <div>
                    <Input value={email} type="text" placeholder="Email Address" setValue={setEmail}></Input>
                    <Input value={number} type="number" placeholder="Mobile Number" setValue={setNumber}></Input>
                    <Input value={password} type="password" placeholder="Password" setValue={setPassword}></Input>
                    <Input value={confirmPassword} type="password" placeholder="Confirm Password" setValue={setConfirmPassword}></Input>
                </div>
                <div className={styles.btn_container}>
                    <FilledButton text="Register" enable={true} onClick={()=> RegisterValid(email, number, password, confirmPassword, history, dispatch)()}/>
                </div>
            </div>
        </div>
    );
};

export default RegisterCard;