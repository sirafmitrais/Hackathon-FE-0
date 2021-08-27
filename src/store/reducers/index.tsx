import { combineReducers } from "redux";

import {
    exampleReducer
} from './example.reducer'

const reducers = combineReducers({
  example: exampleReducer
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;