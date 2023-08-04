import React,{useState} from "react";

function CreationNumber({numeros,setNumeros}){
   

    function getRandomNumber() {
        const min = 1;
        const max = 100;
        
        // Obtiene un número aleatorio entre 0 (incluido) y 1 (excluido)
        const random = Math.random();
        
        // Multiplica el número aleatorio por el rango deseado
        const range = max - min;
        const scaledRandom = random * range;
        
        // Suma el valor mínimo para desplazar el número dentro del rango deseado
        const result = min + scaledRandom;

        setNumeros([...numeros,result])
        console.log(numeros)
        
        // return result;
      }
      
    return (
        <>
       <button onClick={getRandomNumber} type="button" className="btn btn-primary btn-lg">Agregar Numero</button>

        </>
    )
}

export default CreationNumber