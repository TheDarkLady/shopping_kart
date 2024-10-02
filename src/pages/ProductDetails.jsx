import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../Context'

export default function ProductDetails() {
    const {id} = useParams()
    const {productDetails, setProductDetails} = useContext(ShoppingCartContext)
    async function fetchProductDetails(){
        const apiResponse = await fetch(`https://dummyjson.com/products/${id}`)
        const result = await apiResponse.json()
        console.log(result)
        if(result){
            setProductDetails(result)
        }

    }
    useEffect(() => {
        fetchProductDetails()
    },[id])
    console.log(productDetails)
  return (
    <>
      <h1>Product Details</h1>
    </>
  )
}
