import React, { useEffect, useState, useRef } from 'react';
import Header from '../Components/Header';
import LeftNav from '../Components/LeftNav';
import Booking from '../Components/Booking';
import styles from '../CSS/dashboard.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { getReservationAll, getReservationById, getUser } from '../store/action_creators';
import { useSelector } from 'react-redux';
import AdminBooking from '../Components/AdminBooking';
import AddStation from '../Components/AddStation';
import SearchInput from '../Components/SearchInput';
import { useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

const Dashboard = () => {
    const [reservations, setReservations] = useState([]);
    const [display, setDisplay] = useState(4);
    const [totalPages, setTotalPages] = useState(1);
    const [currPage, setCurrPage] = useState(0);
    const [src, setSrc] = useState(undefined);
    const [dst, setDst] = useState(undefined);
    let history = useHistory();

    let { userId: id, admin, update } = useSelector(state => state.state);

    useEffect(async () => {
        if (!admin) {
            let data = await getReservationById(id)();
            await setReservations(data);
        } else {
            let data = await getReservationAll()();
            await setReservations(data);
        }

        setReservations(prev => prev.filter(({ src: _src, dst: _dst }) => {
            let ret = true;
            if (src !== undefined && src.length !== 0) ret &= src === _src;
            if (dst !== undefined && dst.length !== 0) ret &= dst === _dst;
            return ret;
        }));
    }, [id, src, dst, update]);

    useEffect(() => {
        let val = Math.ceil(reservations.length / display);
        if (val === NaN || val <= 0) val = 1;
        setTotalPages(val);
    }, [reservations, display]);

    return (
        <div className={styles.container}>
            <Header pageOnDisplay="Dashboard" />
            <LeftNav />

            <div className={styles.hero}>
                <h1 className={styles.heading}>Dashboard</h1>
                <div className={styles.filter}>
                    <h3 className={styles.filter_heading}>Filter your reservations</h3>
                    <div className={styles.filter_container}><SearchInput value={src} placeholder={"Enter source"} onChange={setSrc} />
                        <SearchInput value={dst} placeholder={"Enter destination"} onChange={setDst} /></div>
                </div>

                <div className={styles.list}>
                    {reservations.length === 0 ? <h3 className={styles.backup_text}>No Reservations to display <span onClick={() => history.push('/plan-journey')} className={styles.link}>{admin ? "" : "Add one"}</span></h3> : <></>}
                    {
                        reservations.slice(currPage * display, currPage * display + display).map(({ id, src, dst, date, userId }) => (
                            admin ?
                                <AdminBooking src={src} dst={dst} date={date} email={userId} key={id} id={id} />
                                :
                                <Booking src={src} dst={dst} date={date} key={id} id={id} />
                        )
                        )}

                    {/* <div className={styles.pagination}>
                        <BsChevronLeft className={styles.icon} onClick={() => setCurrPage(prev => Math.max(0, prev - 1))} />
                        <div className={styles.pages}>
                            {
                                [...Array.from({ length: totalPages }, (_, i) => i + 1)].map(i => <Number i={i} key={i} currPage={currPage} />)
                            }
                        </div>
                        <BsChevronRight className={styles.icon} onClick={() => setCurrPage(prev => Math.min(totalPages - 1, prev + 1))} />
                    </div> */}

                    <Pagination count={totalPages} onChange={(e, page)=> setCurrPage(page-1)} size='large' className={styles.pagination}/>
                </div>
                <AddStation />
            </div>
        </div>
    );
};

export default Dashboard;