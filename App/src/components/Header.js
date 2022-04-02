import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div>
        <section>
          <header className="header inicio" id="main-header">
            <div className="contenedor contenido-header">
                <div className="barra">
                  <Link to="/">
                    <h1>Centro Pokemon</h1>
                  </Link>
                  <div className="derecha">
                      <nav className="navegacion">
                        <NavBar/>
                      </nav>
                  </div>
                </div>
                <h1>Bienvenidos a nuestra Página</h1>
            </div>
          </header>
        </section>
    </div>
  )
}
export default Header