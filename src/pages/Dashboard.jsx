import React, { useEffect, useState, useRef } from 'react';
import Header from '../Components/Header';
import LeftNav from '../Components/LeftNav';
import Booking from '../Components/Booking';
import styles from '../CSS/dashboard.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { getReservationAll, getReservationById, getUser } from '../store/action_creators';
import { useSelector } from 'react-redux';
import AdminBooking from '../Components/AdminBooking';

const Dashboard = () => {
    const [reservations, setReservations] = useState([]);
    const [display, setDisplay] = useState(6);
    const [totalPages, setTotalPages] = useState(1);
    const [currPage, setCurrPage] = useState(0);

    let { userId: id, admin } = useSelector(state => state.state);

    useEffect(async () => {
        if (!admin) {
            let data = await getReservationById(id)();
            setReservations(data);
            // data = await getUser(id)();
            // setEmail(data.email);
        } else {
            let data = await getReservationAll()();
            setReservations(data);
        }
    }, [id]);

    useEffect(() => {
        let val = Math.ceil(reservations.length / display);
        if (val === NaN || val <= 0) val = 1;
        setTotalPages(val);
    }, [reservations, display]);

    console.log(display, totalPages);

    return (
        <div className={styles.container}>
            <Header pageOnDisplay="Dashboard" />
            <LeftNav />

            <div className={styles.hero}>
                <h1 className={styles.heading}>Dashboard</h1>

                <div className={styles.list}>
                    {
                        reservations.slice(currPage * display, currPage * display + display).map(({ src, dst, date, userId }) => (
                            admin ?
                                <AdminBooking src={src} dst={dst} date={date} email={userId} />
                                :
                                <Booking src={src} dst={dst} date={date} />
                        )
                        )}

                    <div className={styles.pagination}>
                        <BsChevronLeft className={styles.icon} onClick={() => setCurrPage(prev => Math.max(0, prev - 1))} />
                        <div className={styles.pages}>
                            {
                                [...Array.from({ length: totalPages }, (_, i) => i + 1)].map(i => <p className={styles.number} key={i}>{i}</p>)
                            }
                        </div>
                        <BsChevronRight className={styles.icon} onClick={() => setCurrPage(prev => Math.min(totalPages - 1, prev + 1))} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;