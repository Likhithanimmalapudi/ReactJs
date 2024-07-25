import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./signup";
import Welcome from "./welcome";
export const UserContext = createContext();
function Home() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <UserContext.Provider value={{isLogin, setIsLogin}}>
        <div>
            {
                isLogin ?
                <div>
                    <Welcome/>
                </div>
                : <Signup />
            }
        </div>
        </UserContext.Provider>
    );
}
export default Home;