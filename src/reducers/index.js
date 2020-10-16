import {combineReducers} from 'redux';
import {reducer as formReducer} from "redux-form";

//http://localhost:8080/signup
const rootReducer = combineReducers({
    // state: (state = {}) => state
    form: formReducer
});

export default rootReducer;