"use client"
import React from 'react'

export default function Add() {
    const [quantity, setQuantity] = React.useState(4)
    const handleQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
       if(e.currentTarget.textContent === "-" && quantity > 1){
           setQuantity((prev) => prev - 1)
       }
       if(e.currentTarget.textContent === "+" && quantity > 1){
           setQuantity((prev) => prev + 1)
       }
    }
    return (
        <div className='flex flex-col gap-4'>
            <h4 className='font-medium'>
                Choose a Quantity
            </h4>
            <div className="flex justify-between">
                <div className='flex items-center gap-4'>
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button onClick={handleQuantity} className='cursor-pointer text-xl'>-</button>
                        {quantity}
                        <button onClick={handleQuantity} className='cursor-pointer text-xl'>+</button>
                    </div>
                    <div className="">Only <span className="text-orange-500">
                        {quantity} items
                    </span> <br />left! {"Don't"} miss it
                    </div>
                </div>
            <button className='w-36 text-sm rounded-3xl ring-1 ring-red-400 text-red-400 px-4 py-2 hover:bg-red-400 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-pink-200'>
                Add to Cart
            </button>
            </div>
        </div>
    )
}
