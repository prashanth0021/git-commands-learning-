import React,{useState} from "react";
function Counter(){
    const [count,setCount]=useState(5);
    const increment=()=>{
      if (count<10)  setCount(count+1);
    };
    const decrement=()=>{
        if(count>3) setCount(count-1);
    };
    return(
    <div className="d-flex align-items-center justify-content-center gap-3 p-3">
      <button className="btn btn-success btn-lg" onClick={increment}>+</button>
      <span className="badge bg-primary fs-5" style={{ minWidth: "3rem", padding: "0.5rem" }}>{count}</span>
      <button className="btn btn-danger btn-lg" onClick={decrement}>-</button>
    </div>
    )
}
export default Counter;