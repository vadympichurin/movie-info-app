import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import './SimilarFilm.css';

const SimilarFilm = ({title, poster, id}) => {
    return (

        <div className='related--films'>
            <NavLink to={`/film_info/${id}`}>
            <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt="film poster"
                 className='similar--film__poster'/>
            </NavLink>
        </div>
    );
};

SimilarFilm.propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string,
    id: PropTypes.number,
}

export default SimilarFilm;
