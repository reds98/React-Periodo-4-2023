import React,{useState} from "react";

function Counter() {

    
    const [contador,setContador]=useState(1)
    // let contador =1 forma vieja

    return (
        <div>
            <p>contador : {contador}</p>
            {/* <button onClick={incrementarContador()}>Incrementar</button> */}
            <button onClick={()=>{
                setContador(contador+1)
                console.log(contador)
                }}>Incrementar</button>
        </div>
    )
}
export default Counter