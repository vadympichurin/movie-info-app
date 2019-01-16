import React from 'react';
import { connect } from 'react-redux';
import SearchCard from '../SearchCard/SearchCard';
import PropTypes from 'prop-types';

const SearchList = ({stateSearch}) => {
    return (
        <div className='searchList'>
            {stateSearch.map(el => <SearchCard id={el.id} key={el.id} title={el.title} poster={el.poster_path}/>)}
        </div>
    )
};

function mapStateToProps(state) {
    return {
        stateSearch: state.stateSearch,
    }
}

SearchList.propTypes = {
    stateSearch: PropTypes.array,
}


export default connect(mapStateToProps)(SearchList);