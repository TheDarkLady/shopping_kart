import { useState } from 'react'
import './index.css'
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import ProductList from './pages/ProductList'
import CartPage from './pages/CartPage'

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Fragment>
  )
}

export default App
