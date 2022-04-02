import NavBar from './NavBar';

const Footer = () => {
  return (
    <div>
        <section>
        <footer className="footer seccion">
        <div className="derecha">
                      <nav className="navegacion">
                        <NavBar/>
                      </nav>
                  </div>
            <p className="copyright">Todos los derechos Reservados 2022 &copy;</p>
        </footer>
      </section>
    </div>
  )
}
export default Footer