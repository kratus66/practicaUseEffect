
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import Details from './Details';
function App() {
  const[characters, setCharacters]=useState([])
  const[detail, setDetail]=useState(false);
  const[id, setId]=useState(0);
  const[casa, setCasa]=useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  


  const handleOnClick=(id)=>{
    setId(id);
    setDetail(true)

    console.log("ID seleccionado:", id)
    console.log("¿Mostrar detalle?", detail)

  }
  const handleOnClose=()=>{
    setDetail(false);
  }

  useEffect(()=>{
    fetch('https://hp-api.onrender.com/api/characters')
    .then((response)=>response.json())
    .then((data)=>{
      const primerosCinco=data.slice(2);
      setCharacters(primerosCinco)
      setFilteredCharacters(primerosCinco)
    })
  }
  ,[])

    const handleHouse = (e) => {
    const casaSeleccionada = e.target.innerText;
    setCasa(casaSeleccionada);

    
      const filtrados = characters.filter((char) => char.house === casaSeleccionada);
      setFilteredCharacters(filtrados);
      setRes(true);

    
  };

   const handleReset=()=>{
      setCasa("");
      setFilteredCharacters(characters);

   }

  return (
    <>
      <button onClick={handleHouse}>Gryffindor</button>
      <button onClick={handleHouse}>Slytherin</button>
      <button onClick={handleHouse}>Hufflepuff</button>
      <button onClick={handleHouse}>Ravenclaw</button>
      <button onClick={handleReset}>Reestablecer</button>
    {
      filteredCharacters.map((character)=>{
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
