import React, {Component} from 'react';
import Grid from '../Grid/Grid';
import PropTypes from 'prop-types';

import { favoriteAsync, favoriteDidMount, delFavorite } from '../redux/actions/favoriteAction';
import { connect } from 'react-redux';


class Favorites extends Component {
    static defaultProps = {};

    static propTypes = {};

    // state = {
    //     result: [],
    // };

    componentDidMount() {
        // let info = JSON.parse(localStorage.getItem('favorite'));
        // this.setState({
        //     result: info,
        // });

        {this.props.favoriteDidMount()}

    }

    // deleteFavorite = (event) => {
    //     this.props.delFromFavorite(event);
    //     this.setState({
    //         result: JSON.parse(localStorage.getItem('favorite')),
    //     });
    // };

    render() {
        return (
            <div className="favorite">
                <Grid result={this.props.stateFavorite} addTo={this.props.delFavorite}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stateFavorite: state.stateFavorite,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFavorite: function (event) {
            dispatch(favoriteAsync(event))
        },
        favoriteDidMount: function () {
            dispatch(favoriteDidMount())
        },
        delFavorite: function (event) {
            dispatch(delFavorite(event))
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
