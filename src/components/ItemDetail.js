
import {Card} from "react-bootstrap"

export const ItemDetail = (props) => {
    const product = props.product;
    const { id, nombre, precio, stock, descripcion, img } = product;

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
                        <Card.Text className="detailStock"> Stock disponible: {stock}</Card.Text>
                        <Card.Text className="detailPrice"> Precio: ${precio}</Card.Text>
                    </Card.Body>
                </Card>
            </Card>
        </div>
    )
}
