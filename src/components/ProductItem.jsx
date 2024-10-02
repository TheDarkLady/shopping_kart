import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ProductItem(SingleProductItem) {
    const navigate = useNavigate()
    function handleNavigateProductDetail(SingleProductItem){
        navigate(`/product-details/${SingleProductItem.id}`)
    }
  return (
    <div className='relative group order border border-cyan-700 p-6 cursor-pointer'>
     <div className='overflow-hidden aspect-w-3/2 aspect-h-1'>
     <img src={SingleProductItem.image} alt="" className='object-cover w-full h-full transition-all duration-300 group-hover:scale-125'/>
     </div>
     <div className='flex flex-col items-center justify-between mt-4 space-x-4'>
        <div className='font-bold  text-gray-900 sm:text-sm text-xs md:text-base space-y-1'> 
            <p className='w=[100px] overflow-hidden text-ellipsis'>{SingleProductItem.title}</p>
        </div>
        <div className='text-right'>
            <p className='font-bold text-gray-900 sm:text-sm text-xs md:text-base'>${SingleProductItem.price}</p>
        </div>
        <button onClick={() => handleNavigateProductDetail(SingleProductItem)} className='text-white bg-black font-medium rounded-lg text-sm px-5 mt-5 py-2.5 text-center'>View Details</button>
     </div>
    </div>
  )
}
