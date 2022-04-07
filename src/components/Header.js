import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
    return <header id="headerNav">
        <Link to="/"><img src="/logo.png" alt="" className="logoHeader"/></Link>
        <NavBar/>
    </header>
};

export default Header
