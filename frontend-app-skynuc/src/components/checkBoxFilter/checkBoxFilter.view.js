import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import useFetch from 'hooks/useFetch';
import React from 'react';
import styles from './checkBoxFilter.module.css';

const CheckBoxFilter = ({ airlineChecked, setAirlineChecked }) => {
    function onChange(event) {
        if (event.target.checked === true) {
            airlineChecked.push(event.target.value);
            setAirlineChecked(airlineChecked);
        } else {
            const index = airlineChecked.indexOf(event.target.value);
            if (index !== -1) {
                airlineChecked.splice(index, 1);
                setAirlineChecked(airlineChecked);
            }
        }

        console.log('checked = ', airlineChecked);
    }

    const { data: airline } = useFetch('airlines', 'GET');

    return (
        <div className={styles.__container}>
            <div>
                <p className={styles.__title}>Airlines</p>
                <div>
                    {airline &&
                        airline.map((item) => {
                            const { two_letter_code, name } = item;
                            return (
                                <div className={styles.__check}>
                                    <Checkbox
                                        onChange={onChange}
                                        key={two_letter_code}
                                        value={two_letter_code}
                                    >
                                        {name}
                                    </Checkbox>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default CheckBoxFilter;
