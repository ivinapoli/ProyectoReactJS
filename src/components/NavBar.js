
import CartWidget from "../components/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <CartWidget/>
            <a href="#" className="navA">Catálogo</a>
            <a href="#" className="navA">Nosotros</a>
            <a href="#" className="navA">Contacto</a>
        </nav>
    );
};

export default NavBar;