import React, {Component} from 'react';
// import axios from 'axios';
import Grid from '../Grid/Grid';

import { connect } from 'react-redux';
import { commingSoonAsync } from '../redux/actions/commingSoonAction';
import { favoriteAsync } from '../redux/actions/favoriteAction';
import { wishlistAsync } from "../redux/actions/wishlistAction";


import './Comming_soon.css';

class Comming_soon extends Component {
    // state = {
    //     result: [],
    // };

    componentDidMount() {

        // axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru-RUS&page=1&region=UA\n")
        //     .then(info => info.data.results)
        //     .then(data => this.setState({
        //         result: data,
        //     }))

        {this.props.commingSoonAction()}

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

export default connect(mapStateToProps, mapDispatchToProps)(Comming_soon);