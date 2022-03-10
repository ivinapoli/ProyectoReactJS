
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";

// import ItemCount from "../components/ItemCount";

let productDetail = 
    {
        id: 1,
        nombre: "Smirnoff",
        precio: 950,
        stock: 12,
        descripcion: "Vodka Smirnoff Nº 21 de 700 ML. Producto de origen ruso.",
        img: "/smirnoff.jpg"
    }

const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const promesa = new Promise((success, error) => {
            setTimeout(() => success(productDetail), 2000);
        }).then((data) => {
            setProduct(data);
        });
    },[]);

    return (
        <section className="backGround">
            <ItemDetail product={product}/>
        </section>
    );
};

export default ItemDetailContainer;