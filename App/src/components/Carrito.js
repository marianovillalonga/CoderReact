import { useContext } from "react"
import { db } from "./Firebase"
import { contexto } from "./MiProvider"
import { addDoc , collection , serverTimestamp } from "firebase/firestore"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"


const Carrito = () => {

    const {carrito,disminuirProducto,borrarProducto,AumentarProducto,total} = useContext(contexto)

    const handleClick = () => {
        
        const orden = {
            buyer : {
                nombre : "Mariano Villalonga",
                telefono : "3413692907",
                email : "marianovillalonga94.mv@gmail.com",
                calle: "Calle falsa 123",
                provincia: "Santa Fe",
                localidad: "Rosario"
            },
            items : carrito,
            date : serverTimestamp(),
            total : total
        }
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection,orden)

        pedido
        .then(res=>{
            console.log(res.id)
        })
        toast.success("Se confirmo la compra correctamente")

    }
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Aumentar</th>
                    <th>Disminuir</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {carrito.map(producto => (
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.precio * producto.cantidad}</td>
                        <td>
                            <button
                                className="button"
                                onClick={() => AumentarProducto(producto.id)}
                            >
                                Aumentar
                            </button>
                        </td>
                        <td>
                            <button
                                className="button"
                                onClick={() => disminuirProducto(producto.id)}
                            >
                                Disminuir
                            </button>
                        </td>
                        <td>
                            <button
                                className="button"
                                onClick={() => borrarProducto(producto.id)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3">Total</td>
                    <td>{total}</td>
                    <td>
                        <Link className="button" to="/formulario" onClick={handleClick}>Confirmar Compra</Link>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

    
export default Carrito