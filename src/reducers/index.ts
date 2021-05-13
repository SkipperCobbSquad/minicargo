import { combineReducers } from 'redux'
import { userSelectoreducer } from './userSelect'

export const allReducers = combineReducers({
    userSelect: userSelectoreducer
})