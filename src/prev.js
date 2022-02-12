import React from 'react'

export default function Prev({ prevpage, i }) {

  return (
    <>
      {i > 0 ? <button className=
        "h-16 left-0 fixed bg-yellow-300 opacity-30 mt-10  w-16 rounded-full text-5xl hover:text-white "
        onClick={prevpage}> &lt;
      </button>
        : null}
    </>
  )
}
