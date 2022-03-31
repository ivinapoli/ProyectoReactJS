
import { Route, Routes } from "react-router-dom";
import CartCheckout from "./CartCheckout";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


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
            <ToastContainer />
        </main>
    );
}

export default Main;
