
import ItemCount from "../components/ItemCount";

const ItemListContainer = () => {
    const miOnAdd = () => {}

    return (
        <ItemCount onAdd={miOnAdd} stock={5} initial={1}></ItemCount>
    );
};

export default ItemListContainer;