import { combineReducers } from 'redux';
import paysReducer from './paysReducer';


export default combineReducers({
    pays: paysReducer,
});