import { combineReducers } from "redux";

import carReducer from './components/Car/reducer';
import truckReducer from './components/Truck/reducer';

const reducers = combineReducers({
    car: carReducer,
    truck: truckReducer
});

export default reducers;
