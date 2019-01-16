import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import Chat from './Chat/Chat';

import { connect } from 'react-redux';
import { bestChoiceAsync } from './redux/actions/bestChoiceAction';


class App extends Component {

    componentDidMount () {
        this.props.bestChoiceAsync();
    };

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

function mapDispatchToProps(dispatch) {
    return {
        bestChoiceAsync: function () {
            dispatch(bestChoiceAsync())
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
