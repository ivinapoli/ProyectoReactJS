
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import ItemCount from "../components/ItemCount";

export let productosIniciales = [
    {
        id: "1",
        nombre: "Smirnoff",
        precio: 950,
        stock: 12,
        categoria: "aperitivos",
        descripcion: "Vodka Smirnoff Nº 21 de 700ml. Producto de origen ruso.",
        img: "/smirnoff.jpg"
    },
    {
        id: "2",
        nombre: "Baron B",
        precio: 3200,
        stock: 8,
        categoria: "espumantes",
        descripcion: "Espumante Baron B Extra Brut de 750ml originario de Mendoza.",
        img: "/baronB.jpg"
    },
    {
        id: "3",
        nombre: "Red Label",
        precio: 2500,
        stock: 7,
        categoria: "whiskies",
        descripcion: "Whisky Johnnie Walker Red Label de 1L. 40% de graduación alcohólica.",
        img: "/redLabel.jpg"
    },
    {
        id: "4",
        nombre: "Casa Boher",
        precio: 1850,
        stock: 10,
        categoria: "espumantes",
        descripcion: "Champagne Casa Boher Extra Brut de 750cc. Producto de origen local.",
        img: "/casaBoher.jpg"
    },
    {
        id: "5",
        nombre: "Chandon",
        precio: 900,
        stock: 14,
        categoria: "espumantes",
        descripcion: "Champagne Chandon Extra Brut de 750ml. Graduación alcohólica: 12%.",
        img: "/chandon.jpg"
    },
    {
        id: "6",
        nombre: "Beefeater",
        precio: 4000,
        stock: 9,
        categoria: "aperitivos",
        descripcion: "Beefeater London Dry Gin de 700ml. Producto importado.",
        img: "/beefeater.jpg"
    },
    {
        id: "7",
        nombre: "Gancia",
        precio: 650,
        stock: 20,
        categoria: "aperitivos",
        descripcion: "Gancia americano original de 950ml.",
        img: "/gancia.jpg"
    },
    {
        id: "8",
        nombre: "Chivas Regal",
        precio: 4800,
        stock: 11,
        categoria: "whiskies",
        descripcion: "Whisky Chivas Regal 12 Años, botella de 1L. Origen escoces.",
        img: "/chivasRegal.jpg"
    },
    {
        id: "9",
        nombre: "Old Smuggler",
        precio: 1300,
        stock: 16,
        categoria: "whiskies",
        descripcion: "Whisky Old Smuggler de 750ml. Graduación alcohólica: 40%",
        img: "/oldSmuggler.jpg"
    },
    {
        id: "10",
        nombre: "Nieto Senetiner",
        precio: 1000,
        stock: 25,
        categoria: "espumantes",
        descripcion: "Espumante Nieto Senetiner Brut Nature de 750ml.",
        img: "/nietoSenetiner.jpg"
    },
    {
        id: "11",
        nombre: "Jack Daniels",
        precio: 9500,
        stock: 5,
        categoria: "whiskies",
        descripcion: "Whisky Jack Daniels Old Nº7 de 1L. Origen USA.",
        img: "/jackDaniels.jpg"
    },
    {
        id: "12",
        nombre: "Fernet Branca",
        precio: 1280,
        stock: 12,
        categoria: "aperitivos",
        descripcion: "Fernet Branca original de 750ml.",
        img: "/fernet.jpg"
    }
]

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


