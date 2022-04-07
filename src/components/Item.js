import {Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {
    const producto = props.producto;
    const { nombre, precio, img } = producto;

    return (
        <Card style={{ width: '18rem' }} className='flexSon'>
            <Card.Img variant="top" src={img}/>
            <Card.Body className="text-center cardBody">
                <Card.Title className='cardTitulo'>{nombre}</Card.Title>
                <Card.Text className='cardPrecio'>${precio}</Card.Text>
                <Button className='detallesBoton'>
                    <Link to={`/producto/${producto.id}`} className='linkBoton'>Ver Detalle</Link>
                </Button>
            </Card.Body>
        </Card>
    )
};

export default Item;
