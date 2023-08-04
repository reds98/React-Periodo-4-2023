import React,{useState} from "react";

function UserInfo({usuario}) {
    return (
        // <div className="card" style="width: 18rem;">
        <div className="card" style={{ width: "18rem;" }}>
            <div className="card-body">
                <h5 className="card-title">Usuario </h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">nombre: {usuario.nombre}</h6>
                <p className="card-text">edad : {usuario.edad}</p>

            </div>
        </div >
    )
}
export default UserInfo