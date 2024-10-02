// create the context 
// provide the context 
// wrap the context 
// consume the context usign useContext
import React, { useEffect } from "react"
import { createContext } from "react"
import { useState } from "react"
export const ShoppingCartContext =createContext(null)

function ShoppingCartProvider({children}){
    const [loading, setLoading] = useState(true)
    const [listOfProducts, setListOfProducts] = useState([])
    const [productDetails, setProductDetails] = useState(null)
    async function fetchListOfProducts(){
        const apiResponse= await fetch('https://dummyjson.com/products')
        const result = await apiResponse.json()
        // console.log(result)
        if(result){
            setListOfProducts(result)
            setLoading(false)
        }
    }
    // console.log(listOfProducts)
    
    useEffect(() => {
        fetchListOfProducts()
    },[])   
    
    return (
        <ShoppingCartContext.Provider value={{listOfProducts, loading, setLoading, productDetails, setProductDetails }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider