
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"
import CartProvider from "./CartContext";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </ BrowserRouter>
        </CartProvider>
    )
}

export default App;

