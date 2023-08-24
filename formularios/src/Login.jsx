import React,{useState} from "react";

function Login({titulo}){

    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=(event)=>{
        event.preventDefault()

        
        if(username && password){
            console.log("USERNAME:",username)
            console.log("PASSWORD:",password)
        }
        else{
            console.log("PORFA LLENE LOS CAMPOS")
        }

        // AQUI IR EL RESTO DEL CODIGO
    }

    return (
        <>
         <h1>{titulo}</h1>

         <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                type="text"
                onChange={(e)=>{setUserName(e.target.value)}}
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                type="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>
            <button type="submit">Login</button>
         </form>
        </>
       
    )
}
export default Login