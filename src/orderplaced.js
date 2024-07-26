import Navigate from "./Navigation";
import { useContext } from 'react';
import { cartContext } from './App';
import { useNavigate } from 'react-router-dom';
function OrderPlaced() {
    const {globalIsLogin,setGlobalIsLogin} = useContext(cartContext);
    const navigate = useNavigate();
    const returnfun = () => {
        setGlobalIsLogin(false);
        navigate('/');
    }
    return (
        <div>
            <Navigate />
            <h1>Order Placed successfully</h1>
            <button type="button" class="btn btn-dark" onClick={returnfun}>Navigate to Home</button>
        </div>
    );
}
export default OrderPlaced;