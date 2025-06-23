
const Card=({character, handleOnClick})=>{
    const {name, house,id}=character;
   



    return(
        <div>
            <h1>{name}</h1>
            <h2>{house}</h2>
            <button onClick={()=>{handleOnClick(id)}}>ver detalle </button>
        </div>
    )
}
export default Card;