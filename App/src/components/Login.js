import React from "react";
import { db } from "./Firebase"
import { collection, where, query, getDocs } from "firebase/firestore"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"


const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const miFiltro = query(collection(db, "usuarios"), where("email", "==", email))
        const documentos = getDocs(miFiltro)
        documentos
            .then(respuesta => {
                if (respuesta.docs.length > 0) {
                    const usuario = respuesta.docs.map(doc => doc.data())[0]
                    if (usuario.password === password) {
                        localStorage.setItem("usuario", JSON.stringify(usuario))
                        toast.success("Bienvenido")
                        window.location.href = "/"
                    } else {
                        toast.error("Contraseña incorrecta")
                    }
                } else {
                    toast.error("Usuario no encontrado")
                }
            })
            .catch(error =>toast.error("Error al obtener los productos"))
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Iniciar Sesion</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" id="email" onChange={
                                        (e) => {
                                            setEmail(e.target.value)
                                        }
                                    } />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="password" onChange={
                                        (e) => {
                                            setPassword(e.target.value)
                                        }
                                    } />
                                </div>
                                <button type="submit" className="button" onClick={handleSubmit}>Entrar</button>
                                <Link className="button" to="/register">Register</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

  
};

export default Login;