import { types } from "../../types/types";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case types.load_books:
      return {
        ...state,
        books: action.payload
      };
    case types.add_to_cart:
      return {
        ...state,
        cart: action.payload,
      };
    case types.remove_to_cart:
      return {
        ...state,
        cart: state.cart.filter( book => book.id !== action.payload)
      };
    case types.reset_cart:
      return {
        ...state,
        cart: []
      }
    default:
      return state;
  }
}