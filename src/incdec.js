import {useContext, useState } from "react";
import { cartContext } from "./App";

function IncreAndDecre(){
    const {globalCount,setGlobalCount} = useContext(cartContext)
    const [count, setCount] = useState(0);
    const increase = () => {    
        setCount(count + 1);
        setGlobalCount(globalCount+1)
    }
    const decrease = () => {
        if(count > 0)
            setCount(count - 1);
            setGlobalCount(globalCount-1)
    }
    const addtoCart = () => {
        setCount(1)
        setGlobalCount(globalCount+1)
    }
 
    return(
        <div> 
            {(count === 0) ?
                <button className="btn btn-outline-dark btn-sm" onClick={addtoCart}>Add to cart</button> :
                <div style = {{ display : "flex",flexWrap : 'wrap'}}>
                    <button className="btn btn-Light" onClick={decrease}> - </button>
                    {count}
                    <button className="btn btn-Light" onClick={increase}> + </button>
                </div> 
            }
        </div>
         
    );
}
export default IncreAndDecre