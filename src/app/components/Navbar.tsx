import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32' >
            {/* Mobile  */}
            <Link href={"/"}>
                Invex.
            </Link>
        </div>
    )
}
