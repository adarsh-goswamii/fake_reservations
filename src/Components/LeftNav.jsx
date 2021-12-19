import React from 'react';
import styles from '../CSS/left_nav.module.css';
import { MdDashboard, MdAdd } from 'react-icons/md';
import {AiOutlineLogout} from 'react-icons/ai';
import { logout } from '../store/functions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LeftNav = () => {
    const history= useHistory();
    let dispatch= useDispatch();
    
    return (
        <div className={styles.container}>
            <div>
                <div title="Dashboard" className={styles.icon_container} onClick={()=> history.push('/dashboard')}>
                    <MdDashboard className={styles.icon} />
                    <p className={styles.icon_title}>Dashboard</p>
                </div>

                <div title="Plan Journey" className={styles.icon_container} onClick={()=> history.push('/plan-journey')}>
                    <MdAdd className={styles.icon} />
                    <p className={styles.icon_title}>Plan journey</p>
                </div>
            </div>

            <div title="Logout" className={`${styles.icon_container} ${styles.logout_icon}`} onClick={()=> logout(dispatch)}>
                <AiOutlineLogout className={styles.icon} />
                <p className={styles.icon_title}>Logout</p>
            </div>
        </div>
    );
};

export default LeftNav;