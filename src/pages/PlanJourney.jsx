import React, { useState } from 'react';
import Header from '../Components/Header';
import LeftNav from '../Components/LeftNav';
import SearchInput from '../Components/SearchInput';
import FilledButton from '../Components/Buttons/FilledButton';
import styles from '../CSS/plan_journey.module.css'
import { bookReservation } from '../store/functions';

const PlanJourney = () => {
    const [source, setSource]= useState(undefined);
    const [destination, setDestination]= useState(undefined);
    const [date, setDate]= useState(undefined);

    return (
        <>
            <div className={styles.container}>
                <Header pageOnDisplay="Plan Journey" />
                <LeftNav />
                <div className={styles.hero}>
                    <h1 className={styles.heading}>Create a reservation</h1>
                    <div className={styles.route_container}>
                        <div className={styles.source}>
                            <SearchInput placeholder="Enter Source" onChange={setSource}/>
                            <div className={styles.card}>
                                <p className={styles.name}>{source=== undefined? "Select a location": source}</p>
                            </div>
                        </div>

                        <div className={styles.source}>
                            <SearchInput placeholder="Enter Destination" onChange={setDestination}/>
                            <div className={styles.card}>
                                <p className={styles.name}>{destination=== undefined? "Select a location": destination}</p>
                            </div>
                        </div>
                    </div>

                    <label htmlFor="datepicker" className={styles.label}>Select Date</label>
                    <input className={styles.date} type="date" id="datepicker" onChange={(e)=> setDate(e.target.value)}/>

                    <div><FilledButton text="Book Reservation" enable={true} onClick={()=> bookReservation(source, destination, date)} /></div>
                </div>

            </div>
            <div className={styles.watermark}>Fake <br />Reservation</div>
        </>
    );
};

export default PlanJourney;