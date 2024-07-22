
function CustomerReviews() {
    const customerReviews = [
        { name: 'John Doe', review: 'Great service, very satisfied!' },
        { name: 'Jane Smith', review: 'Amazing experience, highly recommend.' },
        { name: 'Alex Johnson', review: 'The staff was very helpful and friendly.' },
        { name: 'Emily Davis', review: 'Quick response and excellent customer care.' },
        { name: 'Michael Brown', review: 'Affordable prices and high-quality products.' },
    ];

    return (
        <div>
            <h1>Customer Reviews</h1>
            <ul>
                {customerReviews.map((customer, index) => (
                    <li key={index}> 
                    <div><img src="image.png" alt="Customer" style={{ width: '16px', height: '16px', marginRight: '20px' }} />
                        {customer.name}</div>
                        <div>{customer.review}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerReviews;