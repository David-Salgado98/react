import React from 'react'
import '../App.css'
import {Edad} from'./edad'

export const NombreCompleto = ({edad,nombre}) => {
    return (
        <React.Fragment >{/*Solo debe de haber una etiqueta padre o contenedor general */}
            {/*Lo cambiamos por Reac.Fragment */}
            <h3 className="App">Me llamo David</h3>
            <p className="App">Si puedo agregar un {edad}</p>
            <Edad edadNieto={edad} nombreNieto={nombre}/>

            
        </React.Fragment>
    )
}

//export { nombrecompleto, otro};