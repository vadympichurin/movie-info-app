import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import Play_now from '../Play_now/Play_now';
import Comming_soon from '../Comming_soon/Comming_soon';
import Favorites from '../Favorites/Favorites';
import WishList from '../WishList/WishList';
import FilmCard from '../FilmCard/FilmCard';

import {connect} from 'react-redux';
import {showMenuAction} from '../redux/actions/showMenuAction';
import {showChatAction} from '../redux/actions/showChatAction';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../redux/store/store';
import { inputAction } from "../redux/actions/inputAction";
import { searchAsync } from "../redux/actions/searchAction";
import SearchList from '../SearchList/SearchList';
import './Main.css';


const Main = ({showMenuAction, showChatAction, addTo, addToWish, delFromFavorite, delFromWish, inputAction, stateInput, searchAsync}) => {
    return (
        <main className="main">
            <div className="search--box">
                <form action="#" className="search--movie">
                    <label className="input--label">
                        <input className="input--movie__title" type="text" placeholder="Search movie..." onChange={(event) => {inputAction(event); searchAsync(stateInput)}} value={stateInput}/>
                        <i className="fas fa-search search--icon"></i>
                    </label>
                </form>

                <div className="hidden--buttons">
                    <i className="fas fa-bars menu--icon" onClick={showMenuAction}></i>
                    <i className="far fa-comment chat--icon" onClick={showChatAction}></i>
                </div>
            </div>

            <SearchList/>



            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path='/' render={props => <Play_now addToWish={addToWish}/>}/>
                    <Route path='/upcomming' render={props => <Comming_soon addTo={addTo} addToWish={addToWish}/>}/>
                    <Route path='/favorites' render={props => <Favorites delFromFavorite={delFromFavorite}/>}/>
                    <Route path='/wishlist' render={props => <WishList delFromWish={delFromWish}/>}/>
                    <Route path='/film_info/:id' render={props => <FilmCard {...props}/>}/>
                </Switch>
            </ConnectedRouter>
        </main>
    );

};

function mapStateToProps(state) {
    return {
        showMenu: state.showMenu,
        showChat: state.showChat,
        stateInput: state.stateInput,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showMenuAction: function () {
            dispatch(showMenuAction())
        },
        showChatAction: function () {
            dispatch(showChatAction())
        },
        inputAction: function (event) {
            dispatch(inputAction(event))
        },
        searchAsync: function (filmTitle) {
            dispatch(searchAsync(filmTitle))
        },
    }
}

Main.propTypes = {
    showMenuHendler: PropTypes.func,
    showChatHendler: PropTypes.func,
    addTo: PropTypes.func,
    addToWish: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);