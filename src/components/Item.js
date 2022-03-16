
import {Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {
    const producto = props.producto;
    const { id, nombre, precio, stock, descripcion, img } = producto;

    return (
        <Card style={{ width: '18rem' }} className='flexSon'>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title className='cardTitulo'>{nombre}</Card.Title>
                <Card.Text className='cardPrecio'>${precio}</Card.Text>
                <Button variant="info" className='detallesBoton'>
                    <Link to={`/producto/${producto.id}`} className='linkBoton'>Ver Detalle</Link>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Item;
