import React from "react";
import { db } from "./Firebase"
import { collection, query, getDocs} from "firebase/firestore"
import { toast } from "react-toastify"


const Register = () => {
    const [nombre, setNombre] = React.useState("");
    const [apellido, setApellido] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

     const handleSubmit = (e) => {
        e.preventDefault();
        const miFiltro = query(collection(db, "usuarios"))
        const documentos = getDocs(miFiltro)

        documentos
            .then(respuesta => {
                if (respuesta.docs.length > 0) {
                    toast.error("Usuario ya existe")
                } else {
                    db.collection("usuarios").add({
                        nombre,
                        apellido,
                        email,
                        password
                    })
                        .then(() => {
                            toast.success("Usuario creado")
                            window.location.href = "/"
                        })
                        .catch(error => toast.error("Error al crear el usuario"))
                }
            })
            .catch(error => toast.error("Error al obtener los productos"))
}

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Registrar Usuario</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" name="nombre" onChange={
                                        (e) => {
                                            setNombre(e.target.value)
                                        }
                                    } />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Apellido</label>
                                    <input type="text" className="form-control" id="apellido" name="apellido" onChange={
                                        (e) => {
                                            setApellido(e.target.value)
                                        }
                                    } />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" onChange={
                                        (e) => {
                                            setEmail(e.target.value)
                                        }
                                    } />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" onChange={
                                        (e) => {
                                            setPassword(e.target.value)
                                        }
                                    } />
                                </div>
                                <button type="submit" className="button" onClick={handleSubmit}>Registrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

  
};

export default Register;