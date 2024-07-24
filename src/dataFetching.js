import { useEffect , useState} from "react";
function DataFetching(){
    const[data,setData] = useState([]);
useEffect(()=>{
    const fetchMyData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(res.ok);
        const resData = await res.json();
        setData(resData);
        console.log(resData);
    }
    fetchMyData();
})
return(
    <div>
        <table className = "table">
            <thead>
            <tr>
                <th>Id</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
                {data.map((dataitem,index) => <tr key = {index}>
                    <td>{dataitem.id}</td>
                    <td>{dataitem.userId}</td>
                    <td>{dataitem.title}</td>
                    <td>{dataitem.body}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
)  
}
export default DataFetching;