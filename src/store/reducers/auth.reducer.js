import { types } from "../../types/types"

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
        activeUser: {
          name: action.payload.name,
          email: action.payload.email,
          logged: true,
        },
        users: [
          ...state.users,
          action.payload
        ]
      }

      case types.logout:
        return {
          ...state,
          activeUser: {
            name: '',
            email: '',
            logged: false,
          }
        }

    default: return state;
  }
}