import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import UseApi from "./useapi";
import Home from "./Home";
export const cartContext = createContext();
function App1() {
    const [globalCount, setGlobalCount] = useState(0);
    return (
        <cartContext.Provider value={[globalCount, setGlobalCount]}>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<UseApi />} />
                </Routes>
            </BrowserRouter>
        </div>
        </cartContext.Provider>
    );
}

export default App1;