import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import MiProvider from "./components/MiProvider"
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {

    return( 
        <MiProvider>
            <BrowserRouter>
                <Header/>
                <Main nombre="Mariano " apellido="Villalonga"/>
                <Footer/>
                <ToastContainer/>
            </BrowserRouter>
        </MiProvider>
    )
}

export default App
