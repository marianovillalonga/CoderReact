import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "./Firebase"
import ItemList from "../components/ItemList"
import { getDocs, collection , query , where } from "firebase/firestore"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        
        if(!id){

            const pokemonCollection = collection(db, "pokemon")
            const documentos = getDocs(pokemonCollection)
    
            documentos
            .then(respuesta => setProductos(respuesta.docs.map(doc=>doc.data())))
            .catch(error => toast.error("Error al obtener los productos"))
            .finally(() => setLoading(false))

        } else {

            const pokemonCollection = collection(db, "pokemon")
            const miFiltro = query(pokemonCollection,where("tipo","==",id))
            const documentos = getDocs(miFiltro)

            documentos
            .then(respuesta => setProductos(respuesta.docs.map(doc=>doc.data())))
            .catch(error => toast.error("Error al obtener los productos"))
            .finally(() => setLoading(false))
            
        }


    }, [id])


    return (
        <>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer