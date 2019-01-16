import React, {Component} from 'react';
import Grid from '../Grid/Grid';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { commingSoonAsync } from '../redux/actions/commingSoonAction';
import { favoriteAsync } from '../redux/actions/favoriteAction';
import { wishlistAsync } from "../redux/actions/wishlistAction";

import './Comming_soon.css';

class Comming_soon extends Component {
    
    componentDidMount() {
        this.props.commingSoonAction();
    }

    render() {
        return (
            <div className="commingSoon">
                <Grid result={this.props.stateCommingSoon} addTo={this.props.addFavorite} addToWish={this.props.addWishlist}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stateCommingSoon: state.stateCommingSoon,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        commingSoonAction: function () {
            dispatch(commingSoonAsync())
        },
        addFavorite: function (event) {
            dispatch(favoriteAsync(event))
        },
        addWishlist: function (event) {
            dispatch(wishlistAsync(event))
        },
    }
}

Comming_soon.propTypes = {
    stateCommingSoon: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comming_soon);