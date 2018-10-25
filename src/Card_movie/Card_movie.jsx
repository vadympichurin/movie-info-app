import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

import './Card_movie.css';

const Card_movie = ({id, poster, addTo, addToWish}) => {
    return (
        <div className="card--box">
            <img className="card--movie__poster" src={poster === null ? "https://sd.keepcalm-o-matic.co.uk/i-w600/keep-calm-poster-not-found.jpg" :`https://image.tmdb.org/t/p/w300/${poster}`} alt="movie poster"/>
            <div className="movie--icon__box">
                <i className="far fa-star movie--icon" data-movieid={id} onClick={addTo}></i>
                <i className="far fa-grin-tongue movie--icon" data-movieid={id} onClick={addToWish}></i>
                <i className="far fa-comment-alt movie--icon"></i>
                <NavLink to={`/film_info/${id}`}>
                <i className="fas fa-info-circle movie--icon"></i>
                </NavLink>
            </div>
        </div>
    )
};

Card_movie.propTypes = {
    id: PropTypes.number,
    poster: PropTypes.string,
};

export default Card_movie;