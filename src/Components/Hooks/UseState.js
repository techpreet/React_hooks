import React, { useState } from 'react'
import "./style.css";

const UseState = () => {
    const initialnum=0;
    const[myNum,setMyNum]=useState(initialnum);
    return (
        <>
        <div className="div_center">
            <p>{myNum}</p>
            <div class="button2" onClick={()=>myNum <=99?setMyNum(myNum+1):myNum} >INCR
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="button2" onClick={()=>myNum>0? setMyNum(myNum-1):myNum} >DECR
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>   
        </>
    )
}

export default UseState
