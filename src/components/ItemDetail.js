
import ItemCount from "./ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";
import {Button, Card} from "react-bootstrap";

export const ItemDetail = (props) => {
    const producto = props.producto;
    const { id, nombre, precio, stock, categoria, descripcion, img } = producto;
    const [contadorFuera, setContadorFuera] = useState(false);
    const [unidadesCompradas, setUnidadesCompradas] = useState(0);

    const onAdd = (contadorActivo) => {
        if (contadorActivo != undefined) {
            setContadorFuera(true);
            setUnidadesCompradas(contadorActivo);
        }
    }

    return (
        <div className="flexDetailDiv">
            <Card className="flexDetailDad">
                <Card style={{ width: '25rem' }} className="flexDetailSon">
                <Card.Img src={img}/>
                </Card>
                <Card style={{ width: '25rem' }} className="flexDetailSon">
                    <Card.Body>
                        <Card.Title className="detailTitle">{nombre}</Card.Title>
                        <Card.Subtitle className="detailSubTitle">{descripcion}</Card.Subtitle>
                        <Card.Text className="detailPrice"> Precio: ${precio}</Card.Text>
                        {contadorFuera ?
                        <Link to="/carrito"><Button variant="info" className="botonIrAlCarrito">Ir al Carrito</Button></Link> :
                        <ItemCount initial={1} stock={stock} onAdd={onAdd}/>}
                    </Card.Body>
                </Card>
            </Card>
        </div>
    )
}