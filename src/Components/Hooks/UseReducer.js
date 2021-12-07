import React,{useReducer} from 'react'
import "./style.css";

const reducer=(state,action)=>{
    if(action.type==="INCR"){
        state=state+1;
    }
    if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};
const UseReducer = () => {
    const intialData = 10;
    const [state, dispatch] = useReducer(reducer, intialData);
    return (
        <>
        <div className="div_center">
            <p>{state}</p>
            <div class="button2" onClick={()=>dispatch({type:"INCR"})} >INCR
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="button2" onClick={()=>dispatch({type:"DECR"})} >DECR
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>       
        </>
    );
};

export default UseReducer;