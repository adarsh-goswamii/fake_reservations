import React, {useState, useEffect} from 'react';
import styles from '../CSS/search_input.module.css';
import { Stations } from '../store/action_creators';

const SearchInput = (props) => {
    const [station, setStation]= useState([]); 

    useEffect( async() => {
        let data= await Stations()();
        setStation(data);
    }, []);

    return (
        <div className={styles.container}>
            <input value={props.value} className={styles.input} list="cities" placeholder={props.placeholder} onChange={(e)=> props.onChange(e.target.value)}/>
            <datalist className={styles.datalist} id="cities">
                {
                    station.map(({id, name})=> {
                        return (
                            <option value={name} key={id}/>
                        );
                    })
                }
            </datalist>
        </div>
    );
};

export default SearchInput;