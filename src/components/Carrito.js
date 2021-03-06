import { useContext } from 'react';
import {Button, Card} from "react-bootstrap";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
    const useCartContext = useContext(cartContext);
    const { carrito, borrarDelCarrito, limpiarCarrito, precioTotal, productosTotal } = useCartContext;

    return (
        <>
        {carrito.length === 0 ? <div className="text-center checkoutDiv">
            <h1 className="checkoutTitulo">Su carrito está vacio, comienze a añadir productos.</h1>
            <Link to="/"><Button className='carritoVacioCheckout'>Volver al inicio</Button></Link> </div> :
        <div className="divCarrito">
            <>{
                carrito.map(item => (
                    <div key={item.producto.id}>
                        <div>
                            <Card style={{ width: '18rem' }} className="cardCarrito">
                                <Card.Img variant="top" className='imagenCarrito' src={item.producto.img}/>
                                <Card.Body>
                                    <h3 className='tituloCarrito'>{item.producto.nombre}</h3>
                                    <h3 className='textoCarrito'>Cantidad: {item.count} unidad/es</h3>
                                    <h3 className='textoCarrito'>Precio: ${item.producto.precio} por unidad</h3>
                                    <h3 className='precioCarrito'>Total: ${item.producto.precio * item.count}</h3>
                                    <Button onClick={() => borrarDelCarrito(item.producto)} variant="danger" className='botonesCarrito'>Quitar producto</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                ))
            }
            <div>
                <Card className='cardTotalCarrito'>
                    <Card.Body>
                        <h3 className='totalCarrito'>Total productos: {productosTotal}</h3>
                        <h3 className='totalCarrito'>Total carrito: ${precioTotal}</h3>
                        <Button onClick={limpiarCarrito} variant="danger" className='botonesCart'>Vaciar Carrito</Button>
                        <Button variant="primary" className='botonesCart'>
                            <Link to={`/checkout`} className='linkBotonCarrito'>Realizar Compra</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            </>
            </div>
        }
        </>
    )
};

export default Carrito