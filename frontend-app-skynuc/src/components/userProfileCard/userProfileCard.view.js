import React from 'react';
import styled from 'styled-components';
import userProfilePicture from '../../assets/images/user_profile_avatars/user_profile_avatar_1.png';
import './userProfileCard.css';

const UserProfileCard = () => {
    const Paragraph = styled.a`
        font-weight: 700;
    `;

    const userAirline = 'Vueling';

    return (
        <>
            <div className="wrapper">
                <div className="profile-card js-profile-card">
                    <div className="profile-card__img">
                        <img src={userProfilePicture} alt="profile card" />
                    </div>
                    <div className="profile-card__cnt js-profile-cnt">
                        <div className="profile-card__name">Karom Germain</div>
                        <div className="profile-card__txt">
                            Flight Administrator from <Paragraph>{userAirline}</Paragraph>
                        </div>
                        <div className="profile-card-ctr">
                            <div className="profile-card-ctr-box">
                                <div className="profile-card-inf">
                                    <div className="profile-card-inf__item">
                                        <div className="profile-card-inf__number">16</div>
                                        <div className="profile-card-inf__txt">Flights added</div>
                                    </div>
                                </div>
                                <button className="profile-card__button button--blue">
                                    List my flights
                                </button>
                            </div>
                            <div className="profile-card-ctr-box">
                                <button className="profile-card__button button--green js-message-btn">
                                    Add flight
                                </button>
                                <button className="profile-card__button button--yellow js-message-btn">
                                    Modify flight
                                </button>
                                <button className="profile-card__button button--red js-message-btn">
                                    Delete flight
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card-message js-message">
                        <form className="profile-card-form">
                            <div className="profile-card-form__container">
                                <textarea placeholder="Type your message here" defaultValue={''} />
                            </div>
                            <div className="profile-card-form__bottom">
                                <button className="profile-card__button form__button button--blue js-message-close">
                                    Send
                                </button>
                                <button className="profile-card__button form__button button--gray js-message-close">
                                    Cancel
                                </button>
                            </div>
                        </form>
                        <div className="profile-card__overlay js-message-close" />
                    </div>
                </div>
            </div>
            <a href="https://www.freepik.com/vectors/business">
                Business vector created by freepik - www.freepik.com
            </a>
        </>
    );
};

export default UserProfileCard;

// SOURCE: https://codepen.io/JavaScriptJunkie/pen/jvRGZy

// var messageBox = document.querySelector('.js-message');
// var btn = document.querySelector('.js-message-btn');
// var card = document.querySelector('.js-profile-card');
// var closeBtn = document.querySelectorAll('.js-message-close');

// btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     card.classList.add('active');
// });

// closeBtn.forEach(function (element, index) {
//     console.log(element);
//     element.addEventListener('click', function (e) {
//         e.preventDefault();
//         card.classList.remove('active');
//     });
// });
