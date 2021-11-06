import  { FETCH_ALL_COUNTRIES, SEARCH_COUNTRIES,  FETCH_ONE_COUNTRY, FILTRER_ONE_REGION } from '../actions/types';

const paysReducer = (state, action) => {
    if (state === undefined) {
      return [];
    }
    switch (action.type) {
      case FETCH_ALL_COUNTRIES:
        return action.payload;
      case SEARCH_COUNTRIES:
        return action.payload;
      case FETCH_ONE_COUNTRY:
        return action.payload;
      case FILTRER_ONE_REGION:
          return action.payload;
      default:
        return state;
    }
};
  
export default paysReducer;