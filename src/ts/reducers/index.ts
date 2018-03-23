import {combineReducers} from 'redux';
import {titleReducer} from './titleReducer';
import {homeReducer} from './homeReducer';
import {gameReducer} from "./gameReducer";

const rootReducer = combineReducers({titleReducer, homeReducer, gameReducer});

export default rootReducer;
