import { combineReducers } from "redux";
import { driverReducer } from "./driver.reducer";

import {
    exampleReducer
} from './example.reducer'
import { TruckReducer } from "./truck.reducer";


const reducers = combineReducers({
  example: exampleReducer,
  driver: driverReducer,
  truck: TruckReducer
  
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;