import React, { useEffect, useState, useRef } from 'react';
import Header from '../Components/Header';
import LeftNav from '../Components/LeftNav';
import Booking from '../Components/Booking';
import styles from '../CSS/dashboard.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { getReservationById } from '../store/action_creators';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const [reservations, setReservations] = useState([]);
    const [display, setDisplay] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [currPage, setCurrPage] = useState(0);

    let { userId: id } = useSelector(state => state.state);
    useEffect(() => {
        let val = (Math.ceil((window.innerHeight - 200) / 100));
        setDisplay(val);
    }, [window.innerWidth]);


    useEffect(async () => {
        let data = await getReservationById(id)();
        setReservations(data);
    }, [id]);

    useEffect(() => {
        let val= Math.ceil(reservations.length / display);
        if(val=== NaN || val<=0) val= 1;
        setTotalPages(val);
        console.log(totalPages);
    }, [reservations, display]);

    return (
        <div className={styles.container}>
            <Header pageOnDisplay="Dashboard" />
            <LeftNav />

            <div className={styles.hero}>
                <h1 className={styles.heading}>Dashboard</h1>

                <div className={styles.list}>
                    {
                        reservations.slice(currPage*display, currPage*display+ display).map(({ src, dst, date }) => <Booking src={src} dst={dst} date={date} />)
                    }

                    <div className={styles.pagination}>
                        <BsChevronLeft className={styles.icon} onClick={()=> setCurrPage(prev=> Math.max(0, prev-1))} />
                        <div className={styles.pages}>
                            {
                                [...Array.from({length: totalPages}, (_, i) => i + 1)].map(i=> <p className={styles.number} key={i}>{i}</p>)
                            }
                        </div>
                        <BsChevronRight className={styles.icon} onClick={()=> setCurrPage(prev=> Math.min(totalPages-1, prev+1))}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;