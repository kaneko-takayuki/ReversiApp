import {combineReducers} from 'redux';
import {titleReducer} from './titleReducer';
import {homeReducer} from './homeReducer';

const rootReducer = combineReducers({titleReducer, homeReducer});

export default rootReducer;
