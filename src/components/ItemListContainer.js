import ItemList from "./ItemList";
import { db } from "./Firebase";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { query, where, getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        setLoading(true);
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
                .finally(() => {
                    setLoading(false);
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
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [categoria]);

    return (
        <section className="backGround"> 
            {loading ? <div className="divSpinner"> <Spinner className="spinner" animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner> </div> : <ItemList productos={productos}/>}
        </section>
    );
};

export default ItemListContainer;


