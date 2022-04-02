import { useState } from "react"
import { toast } from "react-toastify"

const Contador = ({stock,initial,onAdd}) => {
    
    const [contador, setContador] = useState(initial)
    
    const handleAumentar = (e) => {
        if(contador < stock){
            setContador(contador + 1)
            toast.success("Se agrego el producto correctamente")
        }
    }

    const handleDisminuir = (e) => {
        if(contador > initial){
            setContador(contador - 1)
            toast.success("Se disminuyo el producto correctamente")
        }
    }

    const handleConfirmar = (e) => {
        console.log(e)
        onAdd(contador)
        toast.success("Se agrego el producto correctamente")
    }
    
    return (
        <div>
            <h1>Contador</h1>
            <p>Mi contador Actual va : {contador}</p>
            <button className="button" onClick={handleAumentar}>aumentar</button>
            <button className="button" onClick={handleConfirmar}>confirmar</button>
            <button className="button" onClick={handleDisminuir}>disminuir</button>
        </div>
    )
}

export default Contador 