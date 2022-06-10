// import React, { useContext } from 'react'
// import {useReducer} from "react";
// import "../src/App.css"


// function Reducer() {

//     const reducer =(state,action)=>{
//         switch(action.type){
//             case "DECREASE" :
//              return state-action.Payload;
//             case "INCREASE" :
//                return state+action.Payload;
//              default:
//                     return state;  

//         }
//     }

//    const [state,dispatch]=useReducer(reducer,0)

   
//   return (
//    <h1>
   
//    <div>Counter :{state} </div>

//    <button onClick={()=>dispatch({type:"DECREASE" , Payload:100})}>-</button>
//    <button onClick={()=>dispatch({type:"INCREASE"  , Payload:100})}>+</button>
//    </h1>

//   )
// }

// export default Reducer