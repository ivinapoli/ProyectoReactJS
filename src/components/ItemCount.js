
import {Button} from "react-bootstrap"
import {useState} from "react"

const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial)

    const sumar = () => {
        if (contador < props.stock) {
            setContador (contador + 1)
        }
    }

    const restar = () => {
        if (contador <= props.stock && contador > 0) {
            setContador (contador - 1)
        }
    }

    const confirmar = () => {
        props.onAdd(contador)
    }

    return (
        <div>
            <h5 className="countStock">Stock: {props.stock}</h5>
            <h4 className="countCantidad">Cantidad: {contador}</h4>
            <Button onClick={sumar} disabled={contador === props.stock} variant="info" className="botonMas">+</Button>
            <Button onClick={restar} disabled={contador === 0} variant="info" className="botonMenos">-</Button>
            <Button onClick={confirmar} disabled={contador === 0} variant="info" className="botonConfirmar">confirmar</Button>
        </div>
    );
};

export default ItemCount;

