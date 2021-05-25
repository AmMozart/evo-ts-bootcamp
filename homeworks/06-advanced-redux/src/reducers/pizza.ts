import { AnyAction } from "redux"
import { Pizza } from "../types"

const initialState: Pizza[] = []

export function pizza(state: Pizza[] = initialState, action: AnyAction): Pizza[] {
  switch (action.type) {
    case "GET_PIZZA_LIST":
      return [action.payload]
    default:
      return state
  }
}
