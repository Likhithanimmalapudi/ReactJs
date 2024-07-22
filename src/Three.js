function Three() {
    const items = [1,2,3,4,5,6,7,8,9];
    return (
        <div>
            <h1>List of items</h1>
            <ul>{items.map((items,index) => (<li key={index}>{items}</li>))}</ul>
        </div>
    );
}
export default Three;