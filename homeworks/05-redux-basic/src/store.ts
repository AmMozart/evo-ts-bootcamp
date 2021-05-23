import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { creditCard } from './reducers/creditCard'

const rootReducer = combineReducers({ creditCard })

export const store = createStore(rootReducer, undefined, composeWithDevTools())