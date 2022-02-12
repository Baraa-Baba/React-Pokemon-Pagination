import React, { useState, useEffect, useRef } from 'react';
import PokemonList from './PokemonList'
import axios from 'axios'
import Next from './next';
import Prev from './prev';
import HandleArrow from './HandleArrow'
import "./bg.css";
function App() {
  const [n, setn] = useState(10)
  const [i, seti] = useState(0)
  const [inputValue, setinputValue] = useState(50)
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=${newi}
  &limit=${n}`)
  var newi = i
  const [loading, setLoading] = useState(true)
  const input = useRef(10)
  function changeN() {
    setn(parseInt(document.getElementById('input').value))
    setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=${newi}&limit=${n}`)
  }
  function nextpage() { i < 1116 && seti(newi + n) }
  function prevpage() { i > 0 && seti(newi - n) }
  useEffect(() => {
    setLoading(true)
    setinputValue(50)
    let cancel
    setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=${newi}&limit=${n}`)
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setPokemon(res.data.results.map(p => p.name))
    })
    return () => cancel()
  }, [currentPageUrl, n, i])


  console.log(i)
  if (loading) return "Loading..."

  return (
    <>
      <HandleArrow nextpage={nextpage}
        prevpage={prevpage} />
      <span className="text-3xl">{inputValue}</span>
      <input type="range" ref={input} id='input' min="1" max="100"
        onChange={() => { setinputValue(document.getElementById('input').value) }}
      />
      <button className="bg-yellow-300 ml-6" onClick={changeN}>change the number
        of poki names in one page({n})  </button>
      <Prev
        prevpage={prevpage}
        i={i} />
      <Next
        i={i}
        nextpage={nextpage} />

      <PokemonList pokemon={pokemon} />


    </>
  );
}

export default App
