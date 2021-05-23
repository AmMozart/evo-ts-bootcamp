import { AnyAction, Reducer } from "redux"
import {
  UPDATE_BALANCE,
  CREDIT,
  DEBIT,
  GET_BALANCE_WITH_TAX
} from '../actionTypes/index'

interface State {
  balance: number
  tax: number
}

const initialState: State = {
  balance: 0,
  tax: 14
}

export const creditCard: Reducer<State, AnyAction> = (state = initialState, action) => {

  const { type, payload } = action
  let balance: number

  switch (type) {
    case UPDATE_BALANCE:
      return { ...state, balance: payload }

    case CREDIT:
      balance = state.balance + payload
      return { ...state, balance }

    case DEBIT:
      balance = state.balance - payload
      return { ...state, balance }

    case GET_BALANCE_WITH_TAX:
      balance = state.balance * ((100 - state.tax) / 100)
      return { ...state, balance }

    default:
      return state
  }
}
