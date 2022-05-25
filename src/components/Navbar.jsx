import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="containerNav">
      <nav className="menu">
        <label className="invApp">Inv - App</label>
        
        <ul className="menu_items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Inventario">Inventario </NavLink>
          </li>
          <li>
            <NavLink to="/Reportes">Reportes</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;