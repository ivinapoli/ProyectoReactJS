
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { productosIniciales } from "./ProductosIniciales";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const ProductoPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales.find((producto) => (producto.id) === (id)) );
            }, 2000);
        });

        ProductoPromise
            .then((data) => {
                setProducto(data);
            })
    }, [id]);

    return (
        <section className="backGround">
            <ItemDetail producto={producto}/>
        </section>
    );
};

export default ItemDetailContainer;