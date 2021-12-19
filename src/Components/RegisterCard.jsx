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
    const [number, setNumber]= useState(0);
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const history= useHistory();
    const dispatch= useDispatch();

    return (
        <motion.div className={styles.container}>
            <motion.div className={styles.info}>
                <h1 className={styles.heading}>Welcome</h1>
                <p className={styles.para}>Enter your personal details and start your journey with us.</p>

                <motion.div className={styles.btn_container}>
                    <p className={styles.para}>Already have an account ?</p>
                    <OutlineButton text='Login' enable={true} onClick={()=> history.push('/login')}/>
                </motion.div>
            </motion.div>
            <motion.div className={styles.input}>
                <h1 className={styles.heading}>Create an account</h1>
                <motion.div>
                    <Input type="text" placeholder="Email Address" setValue={setEmail}></Input>
                    <Input type="number" placeholder="Mobile Number" setValue={setNumber}></Input>
                    <Input type="password" placeholder="Password" setValue={setPassword}></Input>
                    <Input type="password" placeholder="Confirm Password" setValue={setConfirmPassword}></Input>
                </motion.div>
                <motion.div className={styles.btn_container}>
                    <FilledButton text="Register" enable={true} onClick={()=> RegisterValid(email.keyword, number.keyword, password.keyword, confirmPassword.keyword, history, dispatch)()}/>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default RegisterCard;