import { FETCH_ALL_COUNTRIES } from '../actions/types';

const paysReducer = (state, action) => {
    if (state === undefined) {
      return [];
    }
    switch (action.type) {
      case "fetch_all_countries_FULFILLED":
        return action.payload;
      case "search_countries_FULFILLED":
        return action.payload;
      case "fetch_one_country_FULFILLED":
        return action.payload;
      default:
        return state;
    }
};
  
export default paysReducer;