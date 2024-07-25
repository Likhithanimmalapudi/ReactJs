import {useState} from "react";
import Login from "./loginpage";
import Register from "./Registerpage";
function Signup() {
        const [isLogin, setMessage] = useState(true);
        const login1 = () => {
            setMessage(true)
        }
        const register1 = () => {
            setMessage(false)
        }
    return (
        <div>
            <div>
            <button className="btn btn-dark" onClick={login1} style = {{width:'100px', marginLeft:'600px', marginTop:'30px'}}>Login</button>
            <button className="btn btn-dark" onClick={register1} style={{width:'100px', marginLeft:'60px', marginTop:'30px'}}>Register</button>

            {isLogin ?
            <Login/>
            :
            <Register/>
}</div>
        </div>
    );
}
export default Signup;