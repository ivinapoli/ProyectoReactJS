import Item from "./Item";

const ItemList = (props) => {
    const { productos } = props;

    return (
        <>
        <h1 className="tituloMain">What To Drink.</h1>
        <h2 className="subTituloMain">Tus bebidas favoritas, al mejor precio. Directo de fábrica.</h2>
        <div className='flexDad'>
            {productos.map((producto, index) => (
                <Item producto={producto} key={index}/> ))}
        </div>
        </>
    );
};

export default ItemList

