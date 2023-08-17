import React,{useState,useEffect} from "react";

function Counter(){
    const [count,setCount]=useState(0)

    // En fase de Mount y unmount
    useEffect(()=>{
        console.log("componente montado o creado")

        return ()=>{  
            console.log("El componente se puso en desmontado")
        }
    }
    ,[])

    // en fase de Update
    useEffect(()=>{
        console.log("componente actualizado")
    }
    ,[count])


    return (
        <>
        <p>Contador {count}</p>
        <button onClick={()=>{setCount(count +1)}}>
            Incrementar valor
        </button>
        </>
    )
}
export default Counter 