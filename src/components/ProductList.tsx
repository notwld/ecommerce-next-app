import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductList() {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href='/' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80 '>
                <Image src={"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                    alt='product'
                    sizes='25vw'
                    fill
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500'
                />
                <Image src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"}
                    alt='product'
                    sizes='25vw'
                    fill
                    className='absolute object-cover rounded-md'

                />
                </div>
            <div className='flex justify-between'>
                <span className='font-medium'>Product Name</span>
                <span className='font-semibold'>$49</span>
            </div>
            <div className='text-sm text-gray-500'>
                My Description
            </div>
            <button className='rounded-2xl ring-1 ring-red-400 text-red-400 py-2 px-4 hover:bg-red-400 hover:text-white text-xs w-max'>
                Add to Cart
            </button>
            </Link>
            <Link href='/' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80 '>
                <Image src={"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                    alt='product'
                    sizes='25vw'
                    fill
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500'
                />
                <Image src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"}
                    alt='product'
                    sizes='25vw'
                    fill
                    className='absolute object-cover rounded-md'

                />
                </div>
            <div className='flex justify-between'>
                <span className='font-medium'>Product Name</span>
                <span className='font-semibold'>$49</span>
            </div>
            <div className='text-sm text-gray-500'>
                My Description
            </div>
            <button className='rounded-2xl ring-1 ring-red-400 text-red-400 py-2 px-4 hover:bg-red-400 hover:text-white text-xs w-max'>
                Add to Cart
            </button>
            </Link>
            <Link href='/' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80 '>
                <Image src={"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                    alt='product'
                    sizes='25vw'
                    fill
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500'
                />
                <Image src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"}
                    alt='product'
                    sizes='25vw'
                    fill
                    className='absolute object-cover rounded-md'

                />
                </div>
            <div className='flex justify-between'>
                <span className='font-medium'>Product Name</span>
                <span className='font-semibold'>$49</span>
            </div>
            <div className='text-sm text-gray-500'>
                My Description
            </div>
            <button className='rounded-2xl ring-1 ring-red-400 text-red-400 py-2 px-4 hover:bg-red-400 hover:text-white text-xs w-max'>
                Add to Cart
            </button>
            </Link>
            <Link href='/' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80 '>
                <Image src={"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                    alt='product'
                    sizes='25vw'
                    fill
                    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500'
                />
                <Image src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"}
                    alt='product'
                    sizes='25vw'
                    fill
                    className='absolute object-cover rounded-md'

                />
                </div>
            <div className='flex justify-between'>
                <span className='font-medium'>Product Name</span>
                <span className='font-semibold'>$49</span>
            </div>
            <div className='text-sm text-gray-500'>
                My Description
            </div>
            <button className='rounded-2xl ring-1 ring-red-400 text-red-400 py-2 px-4 hover:bg-red-400 hover:text-white text-xs w-max'>
                Add to Cart
            </button>
            </Link>
            
        </div>
    )
}
