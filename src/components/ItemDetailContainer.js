
import { db } from "./Firebase";
import { toast } from "react-toastify";
import { ItemDetail } from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { query, where, getDocs, collection } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const documentosFiltrados = getDocs(query(collection(db, "productos"), where("id", "==", id)));

        documentosFiltrados.then((snapshot) => {
            setProducto(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))[0]);
        })
            .catch((rej) => {
                toast.error("Error. Los productos no fueron cargados correctamente.");
            })
    }, [id]);

    return (
        <section className="backGround">
            <ItemDetail key={producto.id} producto={producto}/>
        </section>
    );
};

export default ItemDetailContainer;