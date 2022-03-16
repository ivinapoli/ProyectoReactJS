
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import productosIniciales from "./ItemListContainer";
import { useParams } from "react-router-dom";

// import ItemCount from "../components/ItemCount";

const ItemDetailContainer = (props) => {
    const [producto, setProducto] = useState({});
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((success, error) => {
            setTimeout(() => success(productosIniciales), 2000);
        }).then((success) => {
            let result = productosIniciales.find(producto => {
                return producto.id === id;
            })
            setProducto(producto)
        })
    }, [id]);

    return (
        <section className="backGround">
            <ItemDetail producto={producto}/>
        </section>
    );
};

export default ItemDetailContainer;