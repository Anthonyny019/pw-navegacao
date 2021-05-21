import React from "react"
import { useParams } from 'react-router-dom'

const Conteudo01 = props => {
    
    const { usuario } = useParams()

    return (
        <div>
            <h1><u>Conteúdo 01</u></h1>
            <h3>Usúario: { usuario } </h3>
        </div>
    )
}

export default Conteudo01