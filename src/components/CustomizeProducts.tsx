"use client"
export default function CustomizeProducts() {
    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-medium">
                Choose a Color
            </h4>
            <ul className="flex items-center gap-5">
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">
                    {/* <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/> */}
                </li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-green-500">
                    <div className="absolute cursor-not-allowed w-[2px] h-10 rounded-full bg-red-400 rotate-[-45deg] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </li>

            </ul>
            <h4 className="font-medium">
                Choose a Size
            </h4>
            <ul className="flex items-center gap-3">
                <li className="ring-1 cursor-pointer ring-red-400 text-red-400 rounded-md px-4 py-1 text-center cursor pointer">
                    Small
                </li>
                <li className="ring-1 cursor-pointer ring-red-400 text-white bg-red-400 rounded-md px-4 py-1 text-center cursor pointer">
                    Medium
                </li>
                <li className="ring-1 cursor-not-allowed ring-pink-200 text-white bg-pink-200 rounded-md px-4 py-1 text-center cursor pointer">
                    Large
                </li>

            </ul>
        </div>
    )
}
