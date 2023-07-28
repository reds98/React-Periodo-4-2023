import React from "react";

function ChildComponent({friend}){
    return (
        <div>
            <h2>Componente Hijo</h2>
            <h3>EDAD DEL AMIGO {friend.age}</h3>
        </div>
    )
}
export default ChildComponent