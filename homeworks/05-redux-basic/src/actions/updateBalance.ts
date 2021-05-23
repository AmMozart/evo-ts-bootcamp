import { AnyAction } from "redux"
import { UPDATE_BALANCE } from '../actionTypes/index'

export const updateBalance = (amount: number): AnyAction => ({
  type: UPDATE_BALANCE,
  payload: amount
})
