import { db } from "./Firebase";
import { toast } from "react-toastify";
import { ItemDetail } from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { query, where, getDocs, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const documentosFiltrados = getDocs(query(collection(db, "productos"), where("id", "==", id)));

        documentosFiltrados.then((snapshot) => {
            setProducto(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))[0]);
        })
            .catch((rej) => {
                toast.error("Error. Los productos no fueron cargados correctamente.");
            })
            .finally(() => {
                setLoading(false);
            })
    }, [id]);

    return (
        <section className="backGround"> 
            {loading ? <div className="divSpinner"> <Spinner className="spinner" animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner> </div> : <ItemDetail key={producto.id} producto={producto}/>}
        </section>
    );
};

export default ItemDetailContainer;