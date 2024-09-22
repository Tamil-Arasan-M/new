import React from 'react'
import Nav from './Nav'
import Home from './Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Menu from './Menu'
import Account from './Account'
import Cart from './Cart'
import More from './More'
import "./App.css"
import Bottom from './Bottom'






const App = () => {
  return (
    <div>
       <Router>
      <Nav/>
      <Bottom/>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/account' element={<Account/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='more' element={<More/>}/>
          
        </Routes>
     
       </Router>
    </div>
  )
}

export default App