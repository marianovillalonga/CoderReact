import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Contador from "../components/Contador"
import { db } from "./Firebase"
import Loader from "../components/Loader"
import { contexto } from "./MiProvider"
import {  collection , where , query , getDocs } from "firebase/firestore"



const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [seleccionado, setSeleccionado] = useState(false)
  const { id } = useParams()
  const {agregarProducto} = useContext(contexto)
  const navigate = useNavigate()

  useEffect(() => {


    const pokemonCollection = collection(db, "pokemon")
    const miFiltro = query(pokemonCollection,where("id","==",Number(id)))
    const documentos = getDocs(miFiltro)

    documentos
    .then(respuesta => setItem(respuesta.docs.map(doc=>doc.data())[0]))
    .catch(error => toast.error("Error al obtener los productos"))
    .finally(() => setLoading(false))

   
  },[id])

  const onAdd = (unidadSeleccionada) => {
    if (unidadSeleccionada != undefined) {
      setSeleccionado(unidadSeleccionada)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    agregarProducto(item,seleccionado)
    navigate("/carrito")
  }

  if (loading) {
    return <Loader />
  } else {
    return (
      <div id="detalle">
        <h2>
          {item.nombre}
          <img src="../img/pokeball.png" alt="" className="pokebolla"/>
        </h2>
        <div className="imagen-detail"><img src={item.imagen} alt="" /></div>
        <p>Descripcion: {item.descripcion}</p>
        <p>Precio : ${item.precio}</p>
        <p>Tipo : {item.tipo}</p>
        <Contador initial={1} stock={5} onAdd={onAdd} />
        <p>{seleccionado ? "ya se selecciono algo!" : "No se eligion ninguna cantidad"}</p>
        {seleccionado ? <Link className="button" onClick={handleClick} to="/carrito">carrito</Link> : null }
      </div>
    )
  }
}

export default ItemDetailContainer