import React, {Component} from 'react';
import { connect } from 'react-redux';
import { playNowAsync } from '../redux/actions/playNowAction';
import { favoriteAsync } from '../redux/actions/favoriteAction';
import { wishlistAsync } from "../redux/actions/wishlistAction";
import { sortPlayNow } from "../redux/selectors/menuSelectors";
import PropTypes from 'prop-types';
import Grid from '../Grid/Grid';

import './Play_now.css';

class Play_now extends Component {

    componentDidMount() {
        this.props.playNowAction();
    }

    render() {
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

Play_now.propTypes = {
    statePlayNow: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(Play_now);