import { combineReducers } from "redux";

import carReducer from './components/Car/reducer';

const reducers = combineReducers({
    car: carReducer
});

export default reducers;