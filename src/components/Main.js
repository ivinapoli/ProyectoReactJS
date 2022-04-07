import { Route, Routes } from "react-router-dom";
import CartCheckout from "./CartCheckout";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
                <Route path="/carrito/" element={<Carrito/>}/>
                <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
                <Route path="/checkout" element={<CartCheckout/>}/>
            </Routes>
        </main>
    );
};

export default Main;
