
import { useContext } from 'react';
import {Button, Card} from "react-bootstrap";
import { cartContext } from "./CartContext";

const Carrito = () => {

    const useCartContext = useContext(cartContext);
    const { carrito, borrarDelCarrito, limpiarCarrito } = useCartContext;

    return (
        <>
            <div className="divCarrito">
                {carrito.length == 0 ? <h2 className='carritoVacio'>Carrito vacio, comienza a añadir productos!</h2> :
                    <>{
                        carrito.map(item => (
                            <div key={item.producto.id}>
                                <div>
                                    <Card style={{ width: '18rem' }} className="cardCarrito">
                                        <Card.Img variant="top" className='imagenCarrito' src={item.producto.img}/>
                                        <Card.Body>
                                            <h3 className='tituloCarrito'>Producto: {item.producto.nombre}</h3>
                                            <h3 className='textoCarrito'>Cantidad y precio: ${item.producto.precio} x {item.count} unidades.</h3>
                                            <h3 className='precioCarrito'>Total: ${item.producto.precio * item.count}</h3>
                                            <Button onClick={() => borrarDelCarrito(item.producto)} variant="warning" className='botonesCarrito'>Quitar producto</Button>
                                            <Button onClick={limpiarCarrito} variant="danger" className='botonesCarrito botonesCarritoDos'>Limpiar carrito</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        ))
                    }
                    </>
                }
            </div>
        </>
    )
}

export default Carrito