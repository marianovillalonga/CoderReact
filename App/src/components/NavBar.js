import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navegacion">
      <NavLink to="/tipo/Planta">Hierba</NavLink>
      <NavLink to="/tipo/Electrico">Electrico</NavLink>
      <NavLink to="/tipo/Agua">Agua</NavLink>
      <NavLink to="/tipo/Fuego">Fuego</NavLink>
      <NavLink to="/carrito">Carrito</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default NavBar;