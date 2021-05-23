import { AnyAction } from "redux"
import { DEBIT } from '../actionTypes/index'

export const debit = (amount: number): AnyAction => ({
  type: DEBIT,
  payload: amount
})
