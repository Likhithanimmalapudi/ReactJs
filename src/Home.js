import { createContext, useContext, useState } from "react";
import Signup from "./signup";
import Welcome from "./welcome";
import { cartContext } from "./App";
export const UserContext = createContext();
function Home() {
    // const [isLogin, setIsLogin] = useState(false);
    const {globalIsLogin, setGlobalIsLogin} = useContext(cartContext);
    return (
        <div>
            {
                globalIsLogin ?
                <div>
                    <Welcome/>
                </div>
                : <Signup />
            }
        </div>
<<<<<<< HEAD
    );
}
export default Home;
=======
        </UserContext.Provider>
    );}
export default Home;
>>>>>>> de8e096fe52864902691a04fc5b00cabf93415ad
