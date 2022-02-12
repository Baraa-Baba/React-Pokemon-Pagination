import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <>
      <style jsx>{`
   @media (max-width:300px) {
     .pokemonlist {
      grid-template-columns: repeat(1, minmax(0, 1fr));
     }
   }
   
`}</style>
      <div className="pokemonlist grid grid-cols-2 ml-20  sm:grid-cols-3  lg:grid-cols-4">
        {pokemon.map(p => (
          p === 'pikachu' ? <p className="md:text-4xl sm:text-3xl text-2xl text-yellow-500 inline-block " key={p}>{p}</p>
            : <p className="md:text-4xl  items-center sm:text-3xl text-2xl inline-block " key={p}>{p}</p>
        ))}
      </div>
    </>
  )
}
