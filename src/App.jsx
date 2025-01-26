import { useState } from 'react'
import CardProduct from './components/CardProduct'
import ListCart from './components/ListCart'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Desserts</h1>
      <ListCart/>
    </div>
  )
}

export default App
