import { Dispatch } from 'react'
import { getPizza } from '../services/api'

export function getPizzaList() {
  return function (dispatch: Dispatch<any>) {
    return getPizza()
      .then(pizza => {
        dispatch({
          type: "GET_PIZZA_LIST",
          payload: [...pizza.items]
        })
      })
  }
}
