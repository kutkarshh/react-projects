import React from 'react'

// props can be accessed via destructuring or if not provided then will use default value "Not Provided"
export default function Card({ id, name = "Not Provided", content }) {
    return (
        <div className="relative h-[400px] w-[300px] rounded-md m-2">
            <img
                src="../public/hanuman.jpeg"
                alt="avatar"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{name}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    {content}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View Profile →
                </button>
            </div>
        </div>
    )
}
