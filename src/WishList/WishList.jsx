import React, {Component} from 'react';
import Grid from '../Grid/Grid';
import PropTypes from 'prop-types';
import { wishlistDidMount, delWishlist } from '../redux/actions/wishlistAction';
import { connect } from 'react-redux';

class WishList extends Component {
    static defaultProps = {};
    componentDidMount() {
        this.props.wishlistDidMount();
    }

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

WishList.propTypes = {
    stateWishlist: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
