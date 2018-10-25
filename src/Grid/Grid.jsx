import React from 'react';
import Card_movie from '../Card_movie/Card_movie';
import PropTypes from 'prop-types';


import './Grid.css';

const Grid = ({result, addTo, addToWish}) => {
    return(

        <div className="main--grid">
            {result.map(el => <Card_movie key={el.id} id={el.id} poster={el.poster_path} addTo={addTo}  addToWish={addToWish}/>)}
        </div>
    )
};

Grid.propTypes = {
    result: PropTypes.array,
};

export default Grid;


// https://sd.keepcalm-o-matic.co.uk/i-w600/keep-calm-poster-not-found.jpg

