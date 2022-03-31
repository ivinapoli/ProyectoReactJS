
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const cartContext = createContext([]);
const { Provider } = cartContext;

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [productosTotal, setProductosTotal] = useState(0);

    const confirmarCompra = () => {
        toast.success("Su compra se ha realizado con éxito!");
        setCarrito([]);
        setPrecioTotal(0);
        setProductosTotal(0);
    }

    const agregarAlCarrito = (producto, count) => {
        let carritoProducto = { producto, count };
        let tempCarrito = [];

        if (isInCarrito(producto)) {
            carritoProducto = carrito.find(item => item.producto.nombre === producto.nombre)
            if (carritoProducto.count + count <= producto.stock) {
                carritoProducto.count += count;
                toast.success("Has agregado " + count + " producto/s al carrito.");
            } else {
                toast.error("No puedes agregar más de " + producto.stock + " unidades de " + producto.nombre + " al carrito.");
                return;
            }
        } else {
            toast.success("Has agregado " + count + " producto/s al carrito.")
            tempCarrito = [carritoProducto, ...carrito]
            setCarrito(tempCarrito)
        }

        let tempPrecioTotal = 0;
        let tempProductosTotal = 0;

        tempPrecioTotal = precioTotal;
        tempPrecioTotal += (producto.precio * count);
        setPrecioTotal(tempPrecioTotal);

        tempProductosTotal = productosTotal;
        tempProductosTotal += count;
        setProductosTotal(tempProductosTotal);
    }

    const limpiarCarrito = () => {
        setCarrito([]);
        setPrecioTotal(0);
        setProductosTotal(0);
        toast.info("Productos eliminados del carrito.");
    }

    const borrarDelCarrito = (producto) => {
        if (isInCarrito(producto)) {
            let tempPrecioTotal = 0;
            let tempProductosTotal = 0;
            const tempCarrito = carrito.filter(item => item.producto !== producto);

            tempCarrito.forEach((item) => {
                tempPrecioTotal += (item.producto.precio * item.count);
                setPrecioTotal(tempPrecioTotal);

                tempProductosTotal += item.count;
                setProductosTotal(tempProductosTotal);
            })

            setCarrito(tempCarrito);
            toast.info(producto.nombre + " eliminado del carrito.");

            if (tempCarrito.length == 0) {
                limpiarCarrito();
            }
        }
    }

    const isInCarrito = (producto) => {
        return carrito && carrito.some(item => item.producto.nombre === producto.nombre);
    }

    return (
        <Provider value={{ carrito, borrarDelCarrito, agregarAlCarrito, limpiarCarrito, precioTotal, productosTotal, confirmarCompra }}>
            {children}
        </Provider>
    )
}

export default CartProvider