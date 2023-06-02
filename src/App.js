import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Card/Card";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import ContextProvider from "./context/Context";
import { ScopedCssBaseline } from "@mui/material";
import Detail from "./components/Detail/Detail";
function App() {
    return (
        <BrowserRouter>
            <ContextProvider>
                <ScopedCssBaseline>
                    <div className="App">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<ProductList />} exact />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/card" element={<Card />} />
                            <Route
                                exact
                                path="/detail/:id"
                                element={<Detail />}
                            />
                        </Routes>
                    </div>
                </ScopedCssBaseline>
            </ContextProvider>
        </BrowserRouter>
    );
}

export default App;
