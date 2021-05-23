import { AnyAction } from "redux"
import { CREDIT } from '../actionTypes/index'

export const credit = (amount: number): AnyAction => ({
  type: CREDIT,
  payload: amount
})