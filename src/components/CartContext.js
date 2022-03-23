
import { createContext, useState } from "react";

export const cartContext = createContext([]);
const { Provider } = cartContext;

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto, count) => {
        let carritoProducto = { producto, count }
        let tempCarrito = []

        if (isInCarrito(producto)) {
            carritoProducto = carrito.find(item => item.producto === producto)
            carritoProducto.count = carritoProducto.count + count
            tempCarrito = [...carrito]
        } else {
            tempCarrito = [carritoProducto, ...carrito]
        }
        setCarrito(tempCarrito)
    }

    const limpiarCarrito = () => {
        setCarrito([]);
    }

    const borrarDelCarrito = (producto) => {
        if (isInCarrito(producto)) {
            const tempCarrito = carrito.filter(item => item.producto !== producto)
            setCarrito(tempCarrito)
        }
    }

    const isInCarrito = (producto) => {
        return carrito && carrito.some(item => item.producto === producto);
    }

    return (
        <Provider value={{ carrito, borrarDelCarrito, agregarAlCarrito, limpiarCarrito }}>
            {children}
        </Provider>
    )
}

export default CartProvider