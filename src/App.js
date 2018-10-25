import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Menu from './Menu/Menu';
import Main from './Main/Main';
import Chat from './Chat/Chat';

import { connect } from 'react-redux';
import { bestChoiceAsync } from './redux/actions/bestChoiceAction';


class App extends Component {

    // state = {
        // showMenu: false,
        // showChat: false,
        // bestChoice: [],
    // };

    // showMenuHendler = () => {
    //     this.setState(prev => ({
    //         showMenu: !prev.showMenu,
    //     }))
    // };

    // showChatHendler = () => {
    //     this.setState(prev => ({
    //         showChat: !prev.showChat,
    //     }))
    // };

    // addToFavorite = (event) => {
    //     axios.get(`https://api.themoviedb.org/3/movie/${event.target.dataset.movieid}?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-rus`)
    //         .then(response => {
    //             let result = JSON.parse(localStorage.getItem('favorite'));
    //             if(result) {
    //                 result.map(el => el.id).includes(response.data.id) ? null : result.push(response.data);
    //             } else {
    //                 result=[];
    //                 result.push(response.data)
    //             }
    //             localStorage.setItem('favorite', JSON.stringify(result));
    //         })
    //         .catch(err => console.log(err));
    // };

    // addToWish = (event) => {
    //   axios.get(`https://api.themoviedb.org/3/movie/${event.target.dataset.movieid}?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-rus`)
    //       .then(info => {
    //           let result = JSON.parse(localStorage.getItem('wishList'));
    //           if(result) {
    //               result.map(el => el.id).includes(info.data.id) ? null : result.push(info.data);
    //           } else {
    //               result=[];
    //               result.push(info.data)
    //           }
    //           localStorage.setItem('wishList', JSON.stringify(result));
    //       })
    //       .catch(error => console.log(error));
    // };

    // delFromFavorite = (event) => {
    //     let result = JSON.parse(localStorage.getItem('favorite'));
    //     result = result.filter(el => el.id !== +event.target.dataset.movieid);
    //     localStorage.setItem('favorite', JSON.stringify(result));
    // };

    // delFromWish = (event) => {
    //     let res = JSON.parse(localStorage.getItem('wishList'));
    //     res = res.filter(el => el.id !== +event.target.dataset.movieid);
    //     localStorage.setItem('wishList', JSON.stringify(res));
    // };

    componentDidMount () {


    //     axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-Rus&page=1&region=UA")
    //         .then(info => {
    //             this.setState ({
    //                 bestChoice: info.data.results,
    //             })
    //         }
    // )
    //         .catch(error => console.log(error));

        {this.props.bestChoiceAsync()}


    };


    // Menu : slideMenu={this.state.showMenu} showMenuHendler={this.showMenuHendler} bestChoice={this.state.bestChoice}
    // Main : showMenuHendler={this.showMenuHendler} showChatHendler={this.showChatHendler} addTo={this.addToFavorite} delFromFavorite={this.delFromFavorite}
    // Chat : showChat={this.state.showChat} showChatHendler={this.showChatHendler}


    render() {
        return (
            <div className="root">

                <Menu/>
                <Main addToWish={this.addToWish}  delFromWish={this.delFromWish}/>
                <Chat/>


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bestChoice: state.stateBestChoice,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        bestChoiceAsync: function () {
            dispatch(bestChoiceAsync())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
