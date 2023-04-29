import { useRef } from 'react';

import Button from '../UI/Button';

import styles from './EventsSearch.module.css';

function EventSearch(props) {

    const yearRef = useRef();
    const monthRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const selectedYear = yearRef.current.value;
        const selectedMonth = monthRef.current.value;

        props.onSearch(selectedYear, selectedMonth);
    }

    return <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>

            <div className={styles.control}>
                <label htmlFor="year" >Year</label>
                <select ref={yearRef} id="year">
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>

            <div className={styles.control}>
                <label htmlFor="month" >Month</label>
                <select ref={monthRef} id="month">
                    <option value='1'>JAN</option>
                    <option value='2'>FEB</option>
                    <option value='3'>MAR</option>
                    <option value='04'>APR</option>
                    <option value='5'>MAY</option>
                    <option value='6'>JUN</option>
                    <option value='7'>JUL</option>
                    <option value='8'>AUG</option>
                    <option value='9'>SEP</option>
                    <option value='10'>OCT</option>
                    <option value='11'>NOV</option>
                    <option value='12'>DEC</option>
                </select>
            </div>

        </div>
        <Button>Search</Button>
    </form>
}

export default EventSearch;