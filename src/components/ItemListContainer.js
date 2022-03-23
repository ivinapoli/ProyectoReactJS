
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productosIniciales } from "./ProductosIniciales";

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const promise = new Promise((res, rej) => {
            setTimeout(() => res(productosIniciales), 2000);
        }).then((res) => {
            if (categoria != undefined) {
                const productosFiltrados = productosIniciales.filter(producto => producto.categoria === categoria)
                setProductos(productosFiltrados)
            } else {
                setProductos(productosIniciales);
            }
        });
    },[categoria]);

    return (
        <section className="backGround">
            <ItemList productos={productos}/>
        </section>
    );
};

export default ItemListContainer;


