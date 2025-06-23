
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import Details from './Details';
function App() {
  const[characters, setCharacters]=useState([])
  const[detail, setDeteil]=useState(false);
  const[id, setId]=useState(0);

  const handleOnClick=(id)=>{
    setId(id);
    setDeteil(true)

    console.log("ID seleccionado:", id)
    console.log("¿Mostrar detalle?", detail)

  }
  const handleOnClose=()=>{
    setDeteil(false);
  }

  useEffect(()=>{
    fetch('https://hp-api.onrender.com/api/characters')
    .then((response)=>response.json())
    .then((data)=>{
      const primerosCinco=data.slice(0,5);
      setCharacters(primerosCinco)
    })
  }
  ,[])

  return (
    <>
    {
      characters.map((character)=>{
        return(
          <Card  key={character.id} character={character} handleOnClick={handleOnClick}/>
          
        )
      }
    
       
    )
    }
     {detail && <Details handleOnClose={handleOnClose} id={id}/>}
    </>
  )
}

export default App
