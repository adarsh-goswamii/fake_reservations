import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import styles from '../CSS/add_station.module.css';
import Input from './Input';
import FilledButton from './Buttons/FilledButton';
import { addStation } from '../store/action_creators';

const AddStation= ()=> {
    let {admin} = useSelector(state=> state.state);
    const [name, setName]= useState('');
    const [url, setUrl]= useState('');

    return (
        <>
        {
            admin? 
            <div className={styles.container}>
                <h3 className={styles.heading}>Add a station</h3>
                <Input type="text" placeholder="Enter station name" setValue={setName} value={name}/>
                <Input type="text" placeholder="Enter station image" setValue={setUrl} value={url}/>
                <FilledButton text="Add Station" enable={true} onClick={()=> {
                    addStation(name, url)();
                    setName('');
                    setUrl('');
                }}/>
            </div>
            :
            <></>
        }
        </>
    );
};

export default AddStation;