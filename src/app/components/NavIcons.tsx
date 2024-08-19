"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CartModal from './CartModal'

export default function NavIcons() {
  const router = useRouter()
  const [isProfileOpened, setIsProfileOpened] = useState(false)
  const [isCartOpened, setIsCartOpened] = useState(false)
  const isLoggedIn = false

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push('/login')
    }
    setIsProfileOpened(!isProfileOpened)
  }
  const handleCart = () => { }
  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <Image src={"/profile.png"}
        width={22}
        height={22}
        alt=''
        className='cursor-pointer'
        onClick={handleProfile}
      />
      {isProfileOpened &&
        <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20'>
          <Link href='/profile'>Profile</Link>
          <div className=''>Logout</div>
        </div>}
      <Image
        src={"/notification.png"}
        width={22}
        height={22}
        alt=''
        className='cursor-pointer'
      />
      <div className='relative cursor-pointer'>
      <Image
        src={"/cart.png"}
        width={22}
        height={22}
        alt=''
        className='cursor-pointer'
        onClick={() => { setIsCartOpened(!isCartOpened) }}
      />
      <div className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center'>1</div>
      </div>
      {isCartOpened && <CartModal />}

    </div>
  )
}
