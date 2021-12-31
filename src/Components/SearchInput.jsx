import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import styles from '../CSS/search_input.module.css';
import { Stations } from '../store/action_creators';

const SearchInput = (props) => {
    const [station, setStation]= useState([]); 
    let {stations} = useSelector(state=> state.state);

    useEffect(() => {
        let data= 
        setStation(data);
    }, [stations]);

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