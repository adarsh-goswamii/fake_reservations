import React from 'react';
import Header from '../Components/Header';
import LeftNav from '../Components/LeftNav';
import Booking from '../Components/Booking';
import styles from '../CSS/dashboard.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Dashboard = () => {
    const height= window.innerHeight;
    const noOfList= Math.ceil((height- 200)/ 100);
    console.log(noOfList);

    return (
        <div className={styles.container}>
            <Header pageOnDisplay="Dashboard" />
            <LeftNav />

            <div className={styles.hero}>
                <h1 className={styles.heading}>Dashboard</h1>

                <div className={styles.list}>
                    <Booking />
                    <Booking />
                    <Booking />
                    <Booking />
                    <Booking />

                    <div className={styles.pagination}>
                        <BsChevronLeft className={styles.icon} />
                        <div className={styles.pages}>
                            <p className={styles.number}>1</p>
                            <p className={styles.number}>2</p>
                            <p className={styles.number}>3</p>
                            <p className={styles.number}>4</p>
                        </div>
                        <BsChevronRight className={styles.icon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;