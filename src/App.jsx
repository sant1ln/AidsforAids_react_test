import './App.css'
import { AuthContext } from './store/AppContext';
import { useReducer } from 'react';
import { authReducer } from './store/reducers/auth.reducer';
import { AppRouter } from './routers/AppRouter';
import { authInitialState } from './store/state/auth.initialState';

/* const init = () => {
   return {
     logged: false,
     name: 'Santiago'
   }
}
 */

function App() {

    const [user,dispatch] = useReducer(authReducer,authInitialState)

  return (
    <div className="App">
      <AuthContext.Provider value={{user,dispatch}}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  )
}

export default App
