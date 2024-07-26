import Navigate from "./Navigation";
import PlusMinus from "./plusMinus";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { cartContext } from './App';

function Cart () {
    const {globalIsLogin,setGlobalIsLogin} = useContext(cartContext);
    const placeorder = () => {
        setGlobalIsLogin(false);
        navigate('/payment');
    }
    const navigate = useNavigate();
    return ( 
        <div>
        <Navigate/>     
        <div style={{display:'flex'}}>
      
            <h2>Cart</h2>
            <div>
            <div className="card" style={{width:'800', marginLeft:'100px',marginTop:'30px'}}>
                <div className="card-body" style={{ display: 'flex' }} >
                    <img src="imagee.jpeg" alt="Product" width="200px" height="200px"/>
                    <div style={{ marginLeft: '100px' }}>
                        <h5>Product1 Name</h5>
                        <p>Description</p><br></br><br></br>
                        <PlusMinus/>
                        </div>
                </div>               
            </div><br></br>
            <div className="card" style={{width:'800', marginLeft:'100px'}}>
                <div className="card-body" style={{ display: 'flex' }} >
                    <img src="imagee.jpeg" alt="Product" width="200px" height="200px"/>
                    <div style={{ marginLeft: '100px' }}>
                        <h5>Product2 Name</h5>
                        <p>Description</p><br></br><br></br>
                        <PlusMinus />
                        </div>
                </div>               
            </div>
            </div>
            <div className="card" style={{width:'350',height:'250', marginLeft:'100px',marginTop:'30px'}}>
                <div className="card-body" >
                    <h5>Price details</h5><br></br>
                    <pre><p>Price (2 items)                  <strong>₹500</strong></p></pre>
                    <hr></hr>
                    <pre><p>Total amount                     <strong>₹500</strong></p></pre>
                    <button className="btn btn-dark" onClick={placeorder}>Place Order</button>
                    </div>
            </div>
        </div>
        </div>
    );
}
export default Cart;