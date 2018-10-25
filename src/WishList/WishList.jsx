import React, {Component} from 'react';
import Grid from '../Grid/Grid';
import PropTypes from 'prop-types';

import { wishlistDidMount, delWishlist } from '../redux/actions/wishlistAction';
import { connect } from 'react-redux';

class WishList extends Component {
    static defaultProps = {};

    static propTypes = {};

    // state = {
    //     result: [],
    // };

    componentDidMount() {
        // let info = JSON.parse(localStorage.getItem('wishList'));
        // this.setState({
        //     result: info,
        // });

        {this.props.wishlistDidMount()}


    }

    // deleteWish = (event) => {
    //     this.props.delFromWish(event);
    //     this.setState({
    //         result: JSON.parse(localStorage.getItem('wishList'))
    //     })
// };

    render() {
        return (
            <div className="wishlist">
                <Grid result={this.props.stateWishlist} addToWish={this.props.delWishlist}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stateWishlist: state.stateWishlist,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        delWishlist: function (event) {
            dispatch(delWishlist(event))
        },
        wishlistDidMount: function () {
            dispatch(wishlistDidMount())
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(WishList);
