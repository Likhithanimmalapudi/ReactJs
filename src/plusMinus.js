import React, { useContext, useState } from "react";
// import { cartContext } from "./App";

function PlusMinus() {
//   const { globalCount, setGlobalCount } = useContext(cartContext);
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
    // setGlobalCount(globalCount + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    //   setGlobalCount(globalCount - 1);
    }
  };


  return (
    <div>
      { 
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <pre><button className="btn btn-Light" onClick={decrease}> - </button>   {count}   <button className="btn btn-Light" onClick={increase}> + </button></pre>
        </div>
    }
    </div>
  );
}

export default PlusMinus;
