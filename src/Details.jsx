
import { useEffect, useState } from 'react';
import './Details.css';
const Details=({id,handleOnClose})=>{

    const[character, setCharacter]=useState({})

    useEffect(()=>{
        
        fetch(`https://hp-api.onrender.com/api/character/${id}`)
        .then((Response)=> Response.json())
        .then((data)=>setCharacter(data[0]))
        

        
    },[])


    return(
        <div className='overlay'>
        <div className="modalDetail">
            <h2>{character.name}</h2>
            <img src={character.image} style={{width:"200px"}} alt="" />
            <button onClick={handleOnClose} className="close-button">Cerrar</button>
        </div>

        </div>
    )
}

export default Details;