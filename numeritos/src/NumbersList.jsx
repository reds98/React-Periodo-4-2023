import React from "react";

function NumberList({numeros}){
    return (
        <>
        <h1>NumberList</h1>
       {numeros.map((numero)=><h2><span class="badge rounded-pill text-bg-success">{numero}</span></h2>)}
        </>
    )
}
export default NumberList