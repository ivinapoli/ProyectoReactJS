import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";
import { useContext } from 'react';

const NavBar = () => {
    const useCartContext = useContext(cartContext);
    const { carrito } = useCartContext;

    return (
        <nav>
            {carrito.length === 0 ? null : <Link to="/carrito/"><CartWidget /></Link>}
            <Link to="/" className="navA">inicio</Link>
            <Link to="/categoria/aperitivos" className="navA">aperitivos</Link>
            <Link to="/categoria/espumantes" className="navA">espumantes</Link>
            <Link to="/categoria/whiskies" className="navA">whiskies</Link>
        </nav>
    );
};

export default NavBar;