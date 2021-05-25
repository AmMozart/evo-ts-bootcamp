export function addPizzaIntoBascket(id: string) {
  return {
    type: "ADD_PIZZA_INTO_BASKET",
    payload: {
      id
    }
  }
}
