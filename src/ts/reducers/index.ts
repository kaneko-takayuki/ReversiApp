import {combineReducers} from "redux";
import {titleReducer} from "./titleReducer";

const rootReducer = combineReducers({titleReducer});

export default rootReducer;
