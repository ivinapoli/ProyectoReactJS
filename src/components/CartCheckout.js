
import { db } from "./Firebase";
import { cartContext } from "./CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from 'react';
import {Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";

const CartCheckout = () => {
    const useCartContext = useContext(cartContext);
    const { carrito, limpiarCarrito, precioTotal, productosTotal, confirmarCompra } = useCartContext;

    const [nombreComprador, setNombreComprador] = useState("");
    const [emailComprador, setEmailComprador] = useState("");
    const [numeroComprador, setNumeroComprador] = useState("");

    const handleCheckout = () => {
        const nuevaVenta = {
            comprador: {
                nombre: nombreComprador,
                numero: numeroComprador,
                email: emailComprador
            },
            productos: carrito,
            fecha: serverTimestamp(),
            total: precioTotal,
        }
        const ventasCollection = collection(db, "ventas");
        const venta = addDoc(ventasCollection, nuevaVenta);
        venta.then((res) => {
            const ventaId = res.id;
            confirmarCompra(ventaId);
        });
    }

    const handleNombre = (e) => {
        setNombreComprador(e.target.value);
    }

    const handleEmail = (e) => {
        setEmailComprador(e.target.value);
    }

    const handleNumero = (e) => {
        setNumeroComprador(e.target.value);
    }

    return (
        <>
        {carrito.length === 0 ? <div className="text-center checkoutDiv">
            <h1 className="checkoutTitulo">Su carrito está vacio, comienze a añadir productos.</h1>
            <Link to="/"><Button variant="info" className='carritoVacioCheckout'>Volver al inicio</Button></Link> </div> :
        <>
        <div className="checkoutDiv2">
            <Form className="form">
                <h2 className="checkoutTitle">A continuación, complete el formulario para finalizar su compra.</h2>
                <Form.Group className="mb-3" >
                    <Form.Label className="datosCheckout">Nombre completo</Form.Label>
                    <Form.Control className="inputsCheckout" required type="nombre" placeholder="Ingrese su nombre" onChange={handleNombre} value={nombreComprador} />
                    <Form.Label className="datosCheckout">Número telefónico</Form.Label>
                    <Form.Control className="inputsCheckout" required type="numero" placeholder="Ingrese su número" onChange={handleNumero} value={numeroComprador} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="emailCheckout">Correo electrónico</Form.Label>
                    <Form.Control className="inputsCheckout" required type="correo" placeholder="Ingrese su correo" onChange={handleEmail} value={emailComprador} />
                    <Form.Text className="text-muted mutedText">
                        No compartiremos su información personal con nadie.
                    </Form.Text>
                </Form.Group>
                <div>
                    <h4 className="productosFinal">Cantidad de productos: {productosTotal}</h4>
                    <h3 className="precioFinal">Precio final: ${precioTotal}</h3>
                </div>
                <div className="text-center">
                    <Button onClick={limpiarCarrito} className="botonesCheckout" variant="danger">Cancelar</Button>
                    <Button onClick={handleCheckout} className="botonesCheckout" variant="primary">Confirmar</Button>
                </div>
            </Form>
        </div>
        </>
        }
        </>
    )
}

export default CartCheckout
