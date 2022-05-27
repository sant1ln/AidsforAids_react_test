import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";  
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { Login } from './pages/Login';
import { Signin } from './pages/Signin';
import { About } from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <div className="app">
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="signin" element={<Signin />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="about" element={<About />} />
              <Route index element={<Home />} />
            </Routes>
          </div>
        </Router>
    </div>
  )
}

export default App
