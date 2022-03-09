
import Item from "./Item";

export const ItemList = (props) => {
    const { productos } = props;

    return (
        <div className='flexDad'>
            {productos.map((producto, index) => (
                <Item producto={producto} key={index}/>
            ))}
        </div>
    );
};



