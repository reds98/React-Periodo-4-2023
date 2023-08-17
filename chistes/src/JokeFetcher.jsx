import React,{useState,useEffect} from "react";

function JokeFetcher(){
    const [joke,setJoke]=useState("")

    useEffect(()=>{
        fetchNewJoke()
    },[])

    const fetchNewJoke=async()=>{
        try{
            const response=await fetch("https://api.chucknorris.io/jokes/random")//Le pedimos al API
            const data=await response.json()//lo que nos envia el api lo convertimos en Un objketo normal de Javascript
            setJoke(data.value)
        }
        catch(error){
            console.log("ERROR CONSUMIENDO EL API",error)
        }
    }
    return (
      <>
        <h1>Chiste de ChuckNorris</h1>
        <p>{joke}</p>
        <button onClick={fetchNewJoke}>Obtener Chiste</button>
      </>
    )
}
export default JokeFetcher