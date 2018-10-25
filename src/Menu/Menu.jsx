import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { showMenuAction } from '../redux/actions/showMenuAction';
import { connect } from 'react-redux';
import { playNowLength } from "../redux/selectors/menuSelectors";


import './Menu.css';

// showMenuHendler
// slideMenu

const Menu = ({showMenu, showMenuAction, bestChoice, statePlayNow, stateCommingSoon, stateFavorite, stateWishlist, playNowLength}) => {
    return (
        <div className={`"left--bar" ${showMenu ? 'show--menu' : 'hidden--menu'}`}>
            <div className="logo-box">
                <i className="fas fa-film logo-icon"></i>
                <h1 className="logo-title">Free Moovie</h1>
                <span className="close--menu" onClick={showMenuAction}>X</span>
            </div>

            <div className="menu-box">
                <ul className="menu--list">
                    <li className="menu--list__item">
                        <i className="far fa-play-circle item--icon"></i>
                        <NavLink className="item--title" to='/'>
                            Playing now
                        </NavLink>
                        <span className="menu--item__quantity">{playNowLength}</span>
                    </li>
                    <li className="menu--list__item">
                        <i className="far fa-calendar-alt item--icon"></i>
                        <NavLink className="item--title" to='/upcomming'>
                            Comming soon
                        </NavLink>
                        <span className="menu--item__quantity">{stateCommingSoon.length}</span>
                    </li>
                    <li className="menu--list__item">
                        <i className="far fa-star item--icon"></i>
                        <NavLink className="item--title" to='/favorites'>
                            Favorites movies
                        </NavLink>
                        <span className="menu--item__quantity">{
                            localStorage.getItem('favorite') === null ? '0' : JSON.parse(localStorage.getItem('favorite')).length

                            // stateFavorite.length === 0 ? (JSON.parse(localStorage.getItem('favorite'))).length : stateFavorite.length

                        }</span>
                    </li>
                    <li className="menu--list__item">
                        <i className="far fa-grin-tongue item--icon"></i>
                        <NavLink className="item--title" to='/wishlist'>
                            Wish list
                        </NavLink>
                        <span className="menu--item__quantity">{stateWishlist.length === 0 ? (JSON.parse(localStorage.getItem('wishList'))).length : stateWishlist.length}</span>
                    </li>
                    <li className="menu--list__item">
                        <i className="far fa-comments item--icon"></i>
                        <NavLink className="item--title" to='/chat'>
                            Chat list
                        </NavLink>
                        <span className="menu--item__quantity">48</span>
                    </li>
                </ul>
            </div>

            <div className='most-movies'>
                <h3 className='best-choise'>Today best choise</h3>
                <div className='most-movie-box'>

                {bestChoice.map(el =>
                <div className='most-movies-card'>
                    <img className='most-movies-poster' src={`https://image.tmdb.org/t/p/w300${el.poster_path}`} alt="movie poster"/>
                    <div className='most-movie-info'>
                        <NavLink to={`/film_info/${el.id}`}>
                    <p className='most-movies-title' >{el.title}</p>
                        </NavLink>
                    <span className='most-movie-raiting'>{el.vote_average}</span>
                </div>
                </div>
                )}
                </div>

            </div>




        </div>
    )
};

function mapStateToProps(state) {
    return {
        showMenu: state.showMenu,
        bestChoice: state.stateBestChoice,
        statePlayNow: state.statePlayNow,
        stateCommingSoon: state.stateCommingSoon,
        stateFavorite: state.stateFavorite,
        stateWishlist: state.stateWishlist,
        playNowLength: playNowLength(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showMenuAction: function () {
            dispatch(showMenuAction())
        }
    }
}


Menu.propTypes = {
    slideMenu: PropTypes.bool,
    showMenuHendler: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Menu);

