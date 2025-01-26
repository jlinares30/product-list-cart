import { useState } from 'react'
import CardProduct from './components/CardProduct'
import ListCart from './components/ListCart'
import ModalOrderCard from './components/ModalOrderCard'
import './App.css'

function App() {
  return (
    <div className="App flex max-md:flex-col">
      <main className='mr-10'>
        <h1 className='text-black font-extrabold text-4xl mb-10' >Desserts</h1>
        <section className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </section>
      </main>
      <aside className=''>
        <ListCart />
      </aside>
    </div>
  )
}

export default App
