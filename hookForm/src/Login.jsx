import React from "react";
import {useForm,Controller} from "react-hook-form"
function Login(){
    const {control,handleSubmit}=useForm()//control es un objeto que tendra una propiedad por cada CONTROLLER

    const onSubmit=(data)=>{
        console.log("FORM DATA ",data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <Controller
                 type="text"
                 name="name"
                 defaultValue=""
                 control={control}
                 render={({ field }) => <input type="text" {...field} />}
                 />
            </div>
            <div>
                <label>Email:</label>
                <Controller 
                type="text"
                name="email"
                defaultValue=""
                control={control}
                render={({ field }) => <input type="text" {...field} />}
                />
            </div>
            <div>
                <label>Apellido:</label>
                <Controller 
                type="text"
                name="apellido"
                defaultValue=""
                control={control}
                render={({ field }) => <input type="text" {...field} />}
                />
            </div>
            <button type="submit">Ingresar</button>
        </form>
    )
}
export default Login