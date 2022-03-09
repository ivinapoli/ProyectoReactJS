
// import {Button} from "react-bootstrap"
// import {useState} from "react"

// const ItemCount = (props) => {
//     const [contador, setContador] = useState(props.initial)

//     const sumar = () => {
//         if (contador < props.stock) {
//             setContador (contador + 1)
//         }
//     }

//     const restar = () => {
//         if (contador <= props.stock && contador > 0) {
//             setContador (contador - 1)
//         }
//     }

//     const confirmar = () => {
//         setContador(0)
//     }

//     return (
//         <section>
//             <h3>Producto x</h3>
//             <h5>Stock: {props.stock}</h5>
//             <h4>Cantidad: {contador}</h4>
//             <Button onClick={sumar} variant="info" className="botonMas">+</Button>
//             <Button onClick={restar} variant="info" className="botonMenos">-</Button>
//             <Button onClick={confirmar} variant="info" className="botonConfirmar">confirmar</Button>
//         </section>
//     );
// };

// export default ItemCount;