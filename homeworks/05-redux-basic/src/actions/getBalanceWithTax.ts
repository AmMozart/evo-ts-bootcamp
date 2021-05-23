import { Action } from "redux"
import { GET_BALANCE_WITH_TAX } from '../actionTypes/index'

export const getBalanceWithTax = (): Action<string> => ({
  type: GET_BALANCE_WITH_TAX
})
