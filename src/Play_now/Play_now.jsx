import React, {Component} from 'react';
// import axios from 'axios';

import { connect } from 'react-redux';
import { playNowAsync } from '../redux/actions/playNowAction';
import { favoriteAsync } from '../redux/actions/favoriteAction';
import { wishlistAsync } from "../redux/actions/wishlistAction";
import { sortPlayNow } from "../redux/selectors/menuSelectors";

import Grid from '../Grid/Grid';

import './Play_now.css';

class Play_now extends Component {
    // state = {
    //     result: []
    // };

    componentDidMount() {
        {this.props.playNowAction()}
    }

    render() {
        console.log(this.props.statePlayNow);
        return (
            <div className="playNow">
                <Grid result={this.props.statePlayNow} addTo={this.props.addFavorite} addToWish={this.props.addWishlist}/>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        statePlayNow: sortPlayNow(state),

    }
}

function mapDispatchToProps(dispatch) {
    return {
        playNowAction: function () {
            dispatch(playNowAsync())
        },
        addFavorite: function (event) {
            dispatch(favoriteAsync(event))
        },
        addWishlist: function (event) {
            dispatch(wishlistAsync(event))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play_now);