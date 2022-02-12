import React from 'react'

export default function Next({ nextpage, i }) {
    return (
        <>
            {i < 1116 ? <button className="h-16 right-0 fixed bg-black bg-opacity-25 hover:bg-opacity-100
             hover:text-white w-16 rounded-full text-5xl mt-10"
                onClick={nextpage}>&gt;</button> : <p>there is no poki names left:(</p>}
        </>
    )
}
