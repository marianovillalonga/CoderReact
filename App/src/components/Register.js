import React from "react";
import { db } from "./Firebase"
import { collection, addDoc} from "firebase/firestore"
import { toast } from "react-toastify"


const Register = () => {
    const [nombre, setNombre] = React.useState("");
    const [apellido, setApellido] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

     const handleSubmit = (e) => {
        e.preventDefault();
        const usuariosCollection = collection(db, "usuarios")
        const usuario = addDoc(usuariosCollection,{
            nombre,
            apellido,
            email,
            password
        })
        usuario
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
                                    <label htmlFor="apellido">Apellido</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="apellido"
                                        placeholder="Ingrese su apellido"
                                        value={apellido}
                                        onChange={e => setApellido(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input

                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Ingrese su email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Ingrese su password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="button">
                                    Registrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;