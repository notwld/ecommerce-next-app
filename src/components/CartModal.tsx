"use client"

import Image from "next/image"

export default function CartModal() {
    const cartItems = true
    return (
        <div className="w-max flex flex-col gap-6 absolute p-4 rounded-md bg-white top-12 left-0 text-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20">
            {cartItems ? <div className="flex flex-col gap-8">
                <h2 className="text-lg">
                    Shopping Cart
                </h2>
                <div className="flex gap-4">
                    <Image src={"/cart.png"} className="object-cover rounded-md" alt='cart-item' width={72} height={96} />
                    <div className="flex flex-col justify-between w-full">
                        <div className="">
                            <div className="flex item-center justify-between gap-8">
                                <h3 className="font-semibold">Product Name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                            </div>
                            <div className="text-sm text-gray-500">
                                available
                            </div>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className=" text-gray-500">Qty. 2</span>
                            <span className=" text-blue-500">Remove</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Image src={"/cart.png"} className="object-cover rounded-md" alt='cart-item' width={72} height={96} />
                    <div className="flex flex-col justify-between w-full">
                        <div className="">
                            <div className="flex item-center justify-between gap-8">
                                <h3 className="font-semibold">Product Name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                            </div>
                            <div className="text-sm text-gray-500">
                                available
                            </div>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className=" text-gray-500">Qty. 2</span>
                            <span className=" text-blue-500">Remove</span>
                        </div>
                       
                    </div>
                </div>
                <p>Shipping and taxes are calculated at checkout.</p>
                        <div className="flex justify-between text-sm">
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                            <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                        </div>
            </div> : <div className='text-center'>Cart is empty</div>}
        </div>
    )
}
