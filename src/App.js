import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import UseApi from "./useapi";
import Home from "./Home";
import Profile from "./profile";
import Cart from "./cart";
import Payment from "./payment";
import OrderPlaced from "./orderplaced";
export const cartContext = createContext();
function App1() {
    const [globalCount, setGlobalCount] = useState(0);
    const [globalUser, setGlobalUser] = useState({});
    const [globalIsLogin, setGlobalIsLogin] = useState(false);
    return (
        <cartContext.Provider value={{ globalCount, setGlobalCount,globalUser, setGlobalUser, globalIsLogin, setGlobalIsLogin}}>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<UseApi />} />
                    <Route path = "/profile" element={<Profile />} />
                    <Route path = "/cart" element={<Cart />} />
                    <Route path = "/payment" element={<Payment />} />
                    <Route path = "/order" element={<OrderPlaced />} />
                </Routes>
            </BrowserRouter>
        </div>
        </cartContext.Provider>
    );
}
export default App1;
