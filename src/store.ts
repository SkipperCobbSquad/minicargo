// import { createStore } from 'redux';
// import { allReducers } from './reducers';

import { ActionUserSelectorType } from './reducers/userSelect';

export interface ReduxStore {
  userSelect: ActionUserSelectorType;
}
