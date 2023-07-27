import React from 'react';
function Button ({texto,color}){
    return (
        <button style={{backgroundColor:color}}>
            {texto}
        </button>
    )
}
export default Button