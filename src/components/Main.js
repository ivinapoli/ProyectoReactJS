
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartWidget from "./CartWidget";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<CartWidget/>}/>
                <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
            </Routes>
    </main>
    );
}

export default Main;
