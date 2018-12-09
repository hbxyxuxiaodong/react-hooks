import React,{useState} from "react";

function FirstHook() {
    const [count, setCount] = useState(0);
    return (
        <div>
          <h1>my first react-hooks</h1>
          <p>You clicked{count}  times</p>
          <button onClick={() => setCount(count+1)}>Click me</button>
        </div>
      );
 
}
export default FirstHook;
