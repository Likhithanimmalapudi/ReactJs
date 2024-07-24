import React, { useState , useRef} from 'react';

function Cart() {
    const firstRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const [reviews, setReviews] = useState([]);
    const [price] = useState(500);

    const addReview = () => {
        console.log("Adding Review...");
        setReviews([...reviews,inputValue]);
        setInputValue('');
        firstRef.current.value = '';
    }
    
    const btnUpdateCount2 = () => {
        console.log("added to cart");
    }

    const inputValueChange = (event) => {
        event.preventDefault();
        console.log("Input Changed");
        console.log(firstRef.current.value);
        setInputValue(firstRef.current.value);
    }

    return (
        <div className="card" style={{width:'1530'}}>
            <div className="card-body">
            <h1>product Name</h1>
            <div  style={{ display: 'flex', marginTop: '30px' }}>
            <div><img src="imagee.jpeg" alt="Product" width="300px" height="300px"/></div>
            <div style={{ marginLeft: '20px' }}>
            <h3>Product Name</h3>
            <p>Description Description Description Description Discription Description Description Description Description Description Description Description Description Discription Description Description Description Description</p><br></br><br></br><br></br><br></br>
            <h3>${price}</h3>
            <button type="button" class="btn btn-success"onClick={btnUpdateCount2}>Add to Cart</button></div></div></div>

            <div className="card" style={{width:'1530'}}>
            <div className="card-body">
            <h5>Product Specifications</h5>
            <p>Description Description Description Description Discription Description Description Description Description Description Description Description Discription Description Description Description Description</p>
        </div></div>

        <div className="card" style={{width:'1530'}}>
        <div className="card-body">
            <h5>Reviews</h5>
            <pre><input type="text" placeholder="Enter Review" ref = {firstRef} onChange={inputValueChange} style = {{ width : '1250px',marginRight :'10px'}} />     <button type="button" class="btn btn-secondary"onClick={addReview}>Add Review</button></pre>
            <h6>Reviews</h6>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                    <strong>Reviewer Name</strong>
                    <p>{review}</p>
                    </li>
                ))}
            </ul>
            </div>
        </div></div>
    );
}
export default Cart;