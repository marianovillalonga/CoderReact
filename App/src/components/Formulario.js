import { useContext } from "react"
import React from "react";
import { db } from "./Firebase"
import { collection, addDoc} from "firebase/firestore"
import { contexto } from "./MiProvider"
import { toast } from "react-toastify"

const Formulario = () => {
    const {carrito,total} = useContext(contexto)

    const [calle, setCalle] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [localidad, setLocalidad] = React.useState("");
    const [nombre, setNombre] = React.useState("");
    const [provincia, setProvincia] = React.useState("");
    const [telefono, setTelefono] = React.useState("");

     const handleSubmit = (e) => {
        e.preventDefault();
        const ordenesCollection = collection(db, "ordenes")
        const ordenes = addDoc(ordenesCollection,{
            calle,
            email,
            localidad,
            nombre,
            provincia,
            telefono,
            carrito,
            total
        })
        ordenes
        .then(res=>{
            console.log(res.id)
        })
        toast.success("Se registro correctamente")
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h1>Registro</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="calle">Calle</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="calle"
                                            placeholder="Ingrese su calle"
                                            value={calle}
                                            onChange={e => setCalle(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="Ingrese su email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="localidad">Localidad</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="localidad"
                                            placeholder="Ingrese su localidad"
                                            value={localidad}
                                            onChange={e => setLocalidad(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            placeholder="Ingrese su nombre"
                                            value={nombre}
                                            onChange={e => setNombre(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="provincia">Provincia</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="provincia"
                                            placeholder="Ingrese su provincia"
                                            value={provincia}
                                            onChange={e => setProvincia(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefono">Telefono</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="telefono"
                                            placeholder="Ingrese su telefono"
                                            value={telefono}
                                            onChange={e => setTelefono(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Enviar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );



};

export default Formulario;