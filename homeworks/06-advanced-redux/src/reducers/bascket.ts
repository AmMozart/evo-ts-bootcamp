import { Pizza } from '../types'

interface State {
  totalPrice: number
  backet: Array<Pizza & { amount: number }>
}

const initialState: State = {
  totalPrice: 0,
  backet: []
}

export interface Action {
  type: string,
  payload: State
}

export function bascket(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'ADD_PIZZA_INTO_BASKET':
      return { ...state, backet: action.payload.backet }
    default:
      return state
  }
}
