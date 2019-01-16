import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchCard = ({id, title, poster}) => {
    return (
        <div className='search-film'>
            <NavLink to={`/film_info/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt="film poster" className='search-film-poster'/>
                <p className='search-film-title'>{title}</p>
            </NavLink>
        </div>
    )
};

SearchCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    poster: PropTypes.string,
}

export default SearchCard;