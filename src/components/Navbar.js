import { NavLink } from "react-router-dom";

const Navbar = () => 
{
    return (  
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/saved">Saved items</NavLink>
        </nav>
    );
}
 
export default Navbar;