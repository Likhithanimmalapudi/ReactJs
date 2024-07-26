// function Login() {
//     return (
//         <div class="card" style={{width:'500', marginLeft:'500px'}}>
//             <div class="card-body">
//             <h2>Login</h2>
//             <p>Provide your details to login</p><br></br>
//             <h4>college Id</h4>
//             <input type="text" placeholder="Enter your college id" style = {{ width : '450px',marginRight :'10px'}}/><br></br><br></br>
//             <h4>Password</h4>
//             <input type="password" placeholder="Enter your password" style = {{ width : '450px',marginRight :'10px'}}/><br></br><br></br>
//             <button type="button" class="btn btn-secondary" style={{width:'100px', marginLeft:'330px'}}>Login</button>
//         </div>
//         </div> 
//     );
// }
// export default Login;
import { useContext, useEffect, useRef, useState } from "react";
import { cartContext } from "./App";
// const id = "22b01a4274";
// const pass = "Likki@2005"
function Login() {
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const [textDisplay, display] = useState('');
    const {globalIsLogin, setGlobalIsLogin} = useContext(cartContext);
    const {globalUser, setGlobalUser} = useContext(cartContext);
    useEffect(() => {
        firstRef.current.focus();
    })
    const formSubmitted = (event) => {
        event.preventDefault();
        if(firstRef.current.value === globalUser.collegeIdValue && secondRef.current.value === globalUser.passwordValue){
            console.log("Login successfull");
            display("Login successfull");
            setGlobalIsLogin(true);
            localStorage.setItem("name","ReactJs");
            localStorage.setItem("branch","YourBranch");
        }
        else{
            console.log("Login failed");
            display("Login failed");
        }
        firstRef.current.value = "";
        secondRef.current.value = "";
    }
    return (
        <div className="card" style={{width:'400', marginLeft:'530px', marginTop:'50px'}}>
            <div className="card-body">
            <h2>Login</h2>
            <p>Provide your details to login</p>
            <form onSubmit={formSubmitted}>
            <h4>college Id</h4>
            <input type="text" placeholder="Enter your college id" style = {{ width : '350px',marginRight :'10px'}} ref={firstRef}/>
            <h4>Password</h4>
            <input type="password" placeholder="Enter your password" style = {{ width : '350px',marginRight :'10px'}} ref={secondRef}/><br></br><br></br>
            <button type="submit" className="btn btn-secondary" style={{width:'100px', marginLeft:'260px'}}>submit</button>
            <p>{textDisplay}</p>
            </form>
        </div>
        </div>
    );
}
export default Login;