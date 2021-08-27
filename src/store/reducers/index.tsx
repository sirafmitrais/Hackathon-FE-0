import { combineReducers } from "redux";
import { driverReducer } from "./driver.reducer";

import {
    exampleReducer
} from './example.reducer'


const reducers = combineReducers({
  example: exampleReducer,
  driver: driverReducer
  
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;