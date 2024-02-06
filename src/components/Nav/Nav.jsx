import {NavLink} from "react-router-dom"
import "./Nav.css"
const Nav = () => {
  return ( 
    <nav className="nav-bar">
      <h1>STAR WARS STARSHIPS</h1>
      <NavLink to='/ships'>Ships</NavLink>
    </nav>
  );
}

export default Nav;