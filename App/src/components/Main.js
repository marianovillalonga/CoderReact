import { Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Carrito from "../components/Carrito"
import Login from "../components/Login"
import Formulario from "../components/Formulario"
import Register from "../components/Register"

const Main = (props) => {

    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/tipo/:id" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/pokemon/:id" element={<ItemDetailContainer/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/formulario" element={<Formulario/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </main>
    );
}

export default Main;