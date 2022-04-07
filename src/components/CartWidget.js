import { cartContext } from "./CartContext";
import { useContext } from 'react';

const CartWidget = () => {
    const useCartContext = useContext(cartContext);
    const { productosTotal } = useCartContext;

    return (
        <div className="divCartWidget">
            <img src="/carrito.png" alt="" className="carrito"/>
            <p className="pCartWidget">{productosTotal}</p>
        </div>
    );
};

export default CartWidget;