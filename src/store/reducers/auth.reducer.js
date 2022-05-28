import { types } from "../../types/types"

const state = {

}


export const authReducer = (state = {}, action) => {

  switch(action.type){
      
    case types.login:
      return {
        ...state,
        activeUser: {
          name: action.payload.name,
          email: action.payload.email,
          logged: true,
        }
      }

    case types.signin:
      return {
        ...state,
        users: [
          ...state.users,
          action.payload
        ]
      }

    default: return state;
  }
}