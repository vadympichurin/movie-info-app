import React from 'react';
import { connect } from 'react-redux';
import SearchCard from '../SearchCard/SearchCard';


const SearchList = ({stateSearch}) => {
    return (
        <div className='searchList'>
            {stateSearch.map(el => <SearchCard id={el.id} title={el.title} poster={el.poster_path}/>)}
        </div>
    )
};

function mapStateToProps(state) {
    return {
        stateSearch: state.stateSearch,
    }
}


export default connect(mapStateToProps)(SearchList);