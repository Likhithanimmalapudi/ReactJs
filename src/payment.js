import React from "react";
import Navigate from "./Navigation";
import { useContext } from 'react';
import { cartContext } from './App';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const {globalIsLogin,setGlobalIsLogin} = useContext(cartContext);
    const navigate = useNavigate();
    const payment = () => {
        setGlobalIsLogin(false);
        navigate('/order');
    }
    return (
        <div>
            <Navigate/>
            <h2>Payment</h2>
            <div className="card" style={{width:'450', marginLeft:'500px',marginTop:'30px'}}>
                <div className="card-body">
                    <h5>Enter your card details</h5><br></br>
                    <h6>Card Number</h6>
                    <input type="text" placeholder="Enter your card number" style = {{ width : '370px',marginRight :'10px'}}/><br></br><br></br>
                    <h6>Card Name</h6>
                    <input type="text" placeholder="Enter your card holder name" style = {{ width : '370px',marginRight :'10px'}}/><br></br><br></br>
                    <h6>Expiry Date</h6>
                    <input type="text" placeholder="Enter your expiry date" style = {{ width : '370px',marginRight :'10px'}}/><br></br><br></br>
                    <h6>CVV</h6>
                    <input type="text" placeholder="Enter your CVV" style = {{ width : '370px',marginRight :'10px'}}/><br></br><br></br>
                    <button type="button" class="btn btn-secondary" style={{width:'120px', marginLeft:'230px'}} onClick={payment}>Place Order</button>
        </div>
        </div>
        </div>
    );
}
export default Payment;