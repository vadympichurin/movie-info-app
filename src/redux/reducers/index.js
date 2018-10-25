import { combineReducers } from 'redux';

import showMenu from './showMenuReducer';
import showChat from './showChatReducer';
import getPlayNow from './playNowReducer';
import getCommingSoon from './commingSoonReducer';
import getBestChoice from './bestChoiceReducer';
import getMovieInfo from './movieInfoReducer';
import isLoading from './isLoadingReducer';
import getFavorite from './favoriteReducer';
import getWishlist from './wishlistReducer';
import getInput from './inputReducer';
import getSearchMovie from './searchReducer';

const rootReducer = combineReducers({
    showMenu,
    showChat,
    statePlayNow: getPlayNow,
    stateCommingSoon: getCommingSoon,
    stateBestChoice: getBestChoice,
    stateMovieInfo: getMovieInfo,
    isLoading,
    stateFavorite: getFavorite,
    stateWishlist: getWishlist,
    stateInput: getInput,
    stateSearch: getSearchMovie,
});

export default rootReducer;