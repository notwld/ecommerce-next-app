"use client"

import Image from "next/image"

export default function ProductImages() {
    return (
        <div>
            <div className="h-[500px] relative">
                <Image src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" alt="product" fill sizes="50vw" className="object-cover rounded-md" />
            </div>
            <div className="flex flex-row gap-4 mt-8 justify-between">
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer">
                <Image src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" alt="product" fill sizes="30vw" className="object-cover rounded-md" />
            
                </div>
                <div className="w-1/4 h-32 relative gap-4 mt-8">
                <Image src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" alt="product" fill sizes="30vw" className="object-cover rounded-md" />
            
                </div>
                <div className="w-1/4 h-32 relative gap-4 mt-8">
                <Image src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" alt="product" fill sizes="30vw" className="object-cover rounded-md" />
            
                </div>
            </div>
        </div>
    )
}
