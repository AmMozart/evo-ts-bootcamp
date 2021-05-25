import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { pizza } from "./reducers/pizza"
import { bascket } from "./reducers/bascket"
import thunk from "redux-thunk"
import { Action } from "./reducers/bascket"
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer: Reducer<any, Action> = combineReducers({
  pizza,
  bascket
})

// const middlewares = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
