import { combineReducers } from 'redux';
import { userSelectoReducer } from './userSelect';
import { mongoConnectionReducer } from './mongoConnect';

export const allReducers = combineReducers({
  userSelect: userSelectoReducer,
  mongoStatus: mongoConnectionReducer,
});
