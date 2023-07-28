import React,{useState} from "react";
import ChildComponent from "./ChildComponent";
function ParentComponent(){

    const [name,setName]=useState("Juan")
    const [friend,setFriend]=useState({name:"Pedro",age:30})
    const [hobbies,setHobbies]=useState(["Correr","Cine","Viajar"])
    const [enemigos,setEnemigos]=useState([
        {nombre:"RAUL",peso:90},
        {nombre:"ANA",peso:70}
    ])
    const incrementarEdadAmigo=()=>{
        setFriend({...friend,age:friend.age+1})
    }

    return (
        <div>
            <h1>Componente Padre</h1>
            <h3>Nombre : {name}</h3>
            <h4>Amigo : {friend.name}</h4>
            <h4>Amigo edad : {friend.age}</h4>
            <h1>Hobbies</h1>
            {hobbies.map((hobby)=><p>{hobby}</p>)}

            {enemigos.map((enemigo)=><h3>{enemigo.nombre}</h3>)}
            <button onClick={incrementarEdadAmigo} > Aumentar Edad</button>
            <h3>----------------------------</h3>
            <ChildComponent friend={friend} />
        </div>
    )
}
export default ParentComponent