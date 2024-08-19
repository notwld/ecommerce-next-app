'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Menu() {
    const [open, setOpen] = useState(false)
    return (
        <div className="c">
            <Image src={"/menu.png"} alt='Menu Icon' width={28} height={28}
                className='cursor-pointer'
                onClick={() => {
                    setOpen(!open)
                }} />
            {open && <div className="flex flex-col items-center justify-center gap-8 absolute z-10 bg-black text-lg text-white left-0 top-20 w-full h-[calc(100vh-80px)]" >
                <Link href={"/"}>Homepage</Link>
                <Link href={"/"}>Shop</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contact</Link>
                <Link href={"/"}>Logout</Link>
                <Link href={"/"}>Cart(1)</Link>
            </div>}
        </div>
    )
}
