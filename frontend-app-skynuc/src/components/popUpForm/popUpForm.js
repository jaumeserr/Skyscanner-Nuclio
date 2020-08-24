import React, { useCallback, useEffect } from 'react';
import './popUpForm.css';

const PopUpForm = ({ handleClose }) => {

    const handleKeyUp = useCallback(
        (e) => {
            const keys = {
                27: () => {
                    e.preventDefault();
                    handleClose();
                    window.removeEventListener('keyup', handleKeyUp, false);
                },
            };

            if (keys[e.keyCode]) {
                keys[e.keyCode]();
            }
        },
        [handleClose],
    );

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp, false);

        return () => {
            window.removeEventListener('keyup', handleKeyUp, false);
        };
    }, [handleKeyUp]);

    const sendFlightDataToDB_2 = () => {
        alert('Here goes POST fetch to DB - CHILDREN COMPONENT');
    };

    return (
        <div className="popup-box">
            <div className="box">
                <div className="top-bar">
                    <p>
                        <b>Add flight</b>
                    </p>
                </div>

                <div className="profile-card-form__container">
                    <div className="profile-card-form-dpt__container">
                        <label htmlFor="dpt-datetime">Departure date and time:</label>
                        <input
                            type="datetime-local"
                            id="dpt-datetime"
                            name="dpt-datetime"
                            min="2020-08-01T00:00"
                            max="2020-12-31T00:00"
                        />
                        <label htmlFor="dpt-city">Departure city:</label>
                        <select name="dpt-city" id="dpt-city">
                            <option value="BCN">Barcelona</option>
                            <option value="MAD">Madrid</option>
                        </select>
                    </div>

                    <div className="profile-card-form-arr__container">
                        <label htmlFor="arr-datetime">Arrival date and time:</label>
                        <input
                            type="datetime-local"
                            id="arr-datetime"
                            name="arr-datetime"
                            min="2020-08-01T00:00"
                            max="2020-12-31T00:00"
                        />
                        <label htmlFor="arr-city">Arrival city:</label>
                        <select name="arr-city" id="arr-city">
                            <option value="BCN">Barcelona</option>
                            <option value="MAD">Madrid</option>
                        </select>
                    </div>
                    <div className="profile-card-form-price__container">
                        <label htmlFor="price">Price (€):</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            min={1}
                            max={1500}
                            defaultValue={0}
                            step=".01"
                        />
                    </div>
                </div>
                <div className="profile-card-form__bottom">
                    {/* <button className="profile-card__button form__button button--green js-message-close" onClick={props.handleSendData}> */}
                    <button
                        className="profile-card__button form__button button--green js-message-close"
                        onClick={sendFlightDataToDB_2}
                    >
                        Send
                    </button>
                    <button
                        className="profile-card__button form__button button--gray js-message-close"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                </div>

                <span className="close-icon" onClick={handleClose}>
                    x
                </span>
            </div>
            <div class="profile-card__overlay" onClick={handleClose}></div>
        </div>
    );
};

export default PopUpForm;
