import './App.css'
import { AuthContext } from './store/AppContext';
import { useReducer } from 'react';
import { authReducer } from './store/reducers/auth.reducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
   return {
     logged: false,
     name: 'Santiago'
   }
}



function App() {

    const [state,dispatch] = useReducer(authReducer,{},init)


  return (
    <div className="App">
      <AuthContext.Provider value={{state,dispatch}}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  )
}

export default App
