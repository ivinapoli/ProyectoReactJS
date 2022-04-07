import ItemCount from "./ItemCount"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import { cartContext } from "./CartContext";

export const ItemDetail = (props) => {
    const producto = props.producto;
    const { nombre, precio, stock, descripcion, img } = producto;

    const [contadorFuera, setContadorFuera] = useState(true);
    const [unidadesCompradas, setUnidadesCompradas] = useState(0);

    const useCartContext = useContext(cartContext);
    const { agregarAlCarrito } = useCartContext;

    const onAdd = (contadorActivo) => {
        if (contadorActivo !== undefined) {
            setUnidadesCompradas(contadorActivo);
            setContadorFuera(false);
        }
    }

    const handlePurchase = () => {
        agregarAlCarrito(producto, unidadesCompradas);
    }

    return (
        <div className="flexDetailDiv">
            <Card className="flexDetailDad">
                <Card className="flexDetailSon">
                <Card.Img src={img}/>
                </Card>
                <Card className="flexDetailSon">
                    <Card.Body>
                        <Card.Title className="detailTitle">{nombre}</Card.Title>
                        <Card.Subtitle className="detailSubTitle">{descripcion}</Card.Subtitle>
                        <Card.Text className="detailPrice"> Precio final: ${precio}</Card.Text>
                        <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
                        {contadorFuera ? null : <Link to="/carrito/"><Button onClick={handlePurchase} className="botonIrAlCarrito">Agregar al carrito</Button></Link>}
                    </Card.Body>
                </Card>
            </Card>
        </div>
    )
};
