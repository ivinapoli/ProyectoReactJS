
import ItemList from "./ItemList";
import { db } from "./Firebase";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { query, where, getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        if (categoria !== undefined) {
            const documentosFiltrados = getDocs(query(collection(db, "productos"), where("categoria", "==", categoria)));
            documentosFiltrados.then((snapshot) => {
                setProductos(snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                })));
            })
                .catch((rej) => {
                    toast.error("Error. Los productos no fueron cargados correctamente.");
                })
        } else {
            const documentos = getDocs(collection(db, "productos"));
            documentos.then((snapshot) => {
                setProductos(snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                })));
            })
                .catch((rej) => {
                    toast.error("Error. Los productos no fueron cargados correctamente.");
                })
        }
    }, [categoria]);

    return (
        <section className="backGround">
            <ItemList productos={productos}/>
        </section>
    );
};

export default ItemListContainer;


