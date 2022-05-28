import { types } from "../../types/types";

export const createUser = (data) => ({
  type: types.signin,
  payload: data
})

export const login = (data) => ({
  type: types.login,
  payload: data
})

export const signout = () => ({type:types.logout})