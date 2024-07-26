import { Link } from "react-router-dom";
import { useContext } from "react";
import {cartContext} from "./App";
function Navigate() {
    const {globalCount, setGlobalCount} = useContext(cartContext);
    return (
        <div style = {{display:'flex',flexDirection :'row',justifyContent:'space-between',background:'#e5e5e5',padding:'10px'}}>
            <div style = {{display : 'flex',gap:'10px',cursor:'pointer'}}>
                <Link to = "/"> Home </Link>
                <Link to = "/product">Products</Link>
            </div>
            <div style = {{display : 'flex',gap:'10px',cursor:'pointer'}}>
                <Link to = "/cart">Cart ({globalCount}) </Link>
                <Link to = "/profile">Profile</Link>
                <Link to = "/payment">Payment</Link>
                <Link to = "/orderplaced">OrderPlaced</Link>
            </div>
        </div>
    );
}
export default Navigate;
