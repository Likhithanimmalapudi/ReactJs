import {useRef} from "react";
function Eight(){
    const firstRef = useRef(null);//reference

const formSubmitted = (event) => {
    event.preventDefault();// prevent reload
    console.log("Form Submitted");
    console.log(firstRef.current.value);
    firstRef.current.value = "";
}
return(
    <div>
        <form onSubmit={formSubmitted}>
            <input type = "text" ref = {firstRef}/>
            <button type = "submit"> Submitt</button>
        </form>
    </div>
)
}
export default Eight;