import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRightToBracket, faUserPlus, faCartShopping, faBars, faTableCells } from '@fortawesome/free-solid-svg-icons'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';

function App() {
  library.add(faRightToBracket, faUserPlus, faCartShopping, faBars, faTableCells)

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products/:id' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
