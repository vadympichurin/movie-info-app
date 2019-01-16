import React from 'react';
import PropTypes from 'prop-types';

import './Message.css';

const Message = ({photo, name, message}) => {
    return (
        <div className="user--message__card">
            <div className="user--photo__box">
                <img className="user--photo__img" src={`${photo}`} alt="user photo"/>

                <span className="user--name">{name}</span>
            </div>
            <p className="user--message" >{message}</p>
        </div>
    )
};

Message.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.string,
};

export default Message;