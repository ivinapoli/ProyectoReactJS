
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

// import ItemCount from "../components/ItemCount";

let productosIniciales = [
    {
        id: 1,
        nombre: "Smirnoff",
        precio: 950,
        stock: 12,
        img: "/smirnoff.jpg"
    },
    {
        id: 2,
        nombre: "Baron B",
        precio: 3500,
        stock: 8,
        img: "/baronB.jpg"
    },
    {
        id: 3,
        nombre: "Red Label",
        precio: 1150,
        stock: 10,
        img: "/redLabel.jpg"
    }
]


const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([{}, {}, {}]);

    useEffect(() => {
        const promise = new Promise((success, error) => {
            setTimeout(() => success(productosIniciales), 2000);
        }).then((data) => {
            setProductos(data);
        });
    });

    return (
        <section className="backGround">
            <ItemList productos={productos}/>
        </section>
    );
};

export default ItemListContainer;


