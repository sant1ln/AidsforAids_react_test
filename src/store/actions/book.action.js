import { types } from "../../types/types";

export const loadBooks = (data) =>({
  type: types.load_books,
  payload: data
})

export const addToCart = (data) =>({
  type: types.add_to_cart,
  payload: data
})

export const removeFromCart = (ID) =>({
  type: types.remove_from_cart,
  payload: ID
})

export const resetCart = (data) =>({
  type: types.reset_cart
})