import { useEffect, useState } from "react";

function Seven() {
    // const count = 0;
    const [reviews, setReviews] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(500);
        useEffect(() => {
        // setCount(5);
        console.log("Use effect is called");
    },[count]);
    const btnUpdateCount = () => {
        setCount(count + 1);
    }
    const btnUpdateCount1 = () => {
        if (count <= 0){
            return;
        }
        setCount(count - 1);
    }
    const btnUpdateCount2 = () => {
        setCount(1);
    }
    const btnUpdateCount3 = () => {
        console.log("Review added");
        setInputValue(reviews);
    }
    const inputValueChange = (event) => {
        console.log("Input Changed");
        console.log(event.target.value);
        setReviews(event.target.value);
    }
    return (
        <div>
            <button type="button" class="btn btn-primary"onClick={btnUpdateCount2}>Add to Cart</button><br></br><br></br>
            <h1> Rs {count1*count}</h1><br></br>
            <pre><button type="button" class="btn btn-primary"onClick={btnUpdateCount}>+</button>    {count}    <button type="button" class="btn btn-primary"onClick={btnUpdateCount1}>-</button></pre>
            <pre><input type="text" placeholder="Enter Review"  onChange={inputValueChange} />     <button type="button" class="btn btn-primary"onClick={btnUpdateCount3}>Add Review</button></pre>
            <p>{inputValue}</p>
        </div>  
    );
}
export default Seven;