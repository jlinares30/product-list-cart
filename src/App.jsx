import { useState, useContext } from 'react'
import CardProduct from './components/CardProduct'
import ListCart from './components/ListCart'
import ModalOrderCard from './components/ModalOrderCard'
import './App.css'
import data from './data.json'
import { CartContext } from './context/CartContext'

function App() {
  const initializedData = data.map(product => ({
      ...product,
      quantity: 0
  }))
  const {isCheckoutModalOpen} = useContext(CartContext)
  return (
    <div className="App relative flex max-md:flex-col">
      <main className='mr-10'>
        <h1 className='text-black font-extrabold text-4xl mb-10' >Desserts</h1>
        <section className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
          {initializedData.map((product,index)=>(
            <CardProduct key={product.id} category={product.category} nameProduct={product.name} price={product.price} image={product.image.desktop} product={product}/>
            ))
          }
        </section>
      </main>
      <aside className=''>
        <ListCart/>
      </aside>
      {isCheckoutModalOpen && <ModalOrderCard />}
    </div>
  )
}

export default App
