
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import ItemListContainer from "../components/ItemListContainer"

function App () {
    return (
        <>
            <Header/>
            <ItemListContainer greeting="¡Bienvenido a mi e-commerce!"></ItemListContainer>
            <Main/>
            <Footer/>
        </>
    )
}

export default App;

