import Main from "./Main"
import Header from "./Header"
import Footer from "./Footer"
import CartProvider from "./CartContext";
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
                <ToastContainer />
            </ BrowserRouter>
        </CartProvider>
    )
}

export default App;

