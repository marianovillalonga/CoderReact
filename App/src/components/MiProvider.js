import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const contexto = createContext()
const {Provider} = contexto

const MiProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const [cantidadActual,setCantidadActual] = useState(0)

    const agregarProducto = (item,cantidad) => {
        setCarrito([...carrito,{...item,cantidad}])
        setTotal(total + item.precio * cantidad)
        setCantidadActual(cantidadActual + cantidad)
    }

    const borrarProducto = id => {
        setCarrito(carrito.filter(item => item.id !== id))
        setTotal(total - carrito.find(item => item.id === id).precio * carrito.find(item => item.id === id).cantidad)
        setCantidadActual(cantidadActual - carrito.find(item => item.id === id).cantidad)
        toast.success("Se elimino el producto correctamente")
    }

    const AumentarProducto = id => {
        setCarrito(carrito.map(item => {
            if(item.id === id){
                toast.success("Se aumento el producto ")
                item.cantidad++
                setCantidadActual(cantidadActual + 1)
                setTotal(total + item.precio)
            }
            return item
        }))
    }

    const disminuirProducto = id => {
        setCarrito(carrito.map(item => {
            if(item.id === id && item.cantidad > 1){
                item.cantidad--
                setCantidadActual(cantidadActual - 1)
                setTotal(total - item.precio)
            }else{
                toast.error("No se puede disminuir mas, por favor elimine el producto")
            }
            return item
        }))
    }
        
    

    const valorDelProvider = {
        carrito ,
        borrarProducto,
        agregarProducto,
        disminuirProducto,
        AumentarProducto,
        total
    }

    return (
        <Provider value={valorDelProvider}>
            {children}
        </Provider>
    )
}

export default MiProvider