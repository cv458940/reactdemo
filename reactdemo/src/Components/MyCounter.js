import React from "react";
import {useState} from "react";


function MyCounter(){

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

  return(
          <div>
              <button onClick={()=>{
                  setCount1(count1+1)
              }}>Add 1</button>
              <p>{count1}</p>
              <button onClick={()=>{
                  setCount2(count2+2)
              }}>Add 2</button>
              <p>{count2}</p>
          </div>
      )

}
export default MyCounter;