import { useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { incrementBonus } from "./redux/ActionCreators/bonusReducerActCreators";
function Bonus(){
   const bonousState=useSelector(state=>state.bns);
  console.log('bonus called');
  const dispatch=useDispatch();

    return(


        <div style={{textAlign:'center'}}>
        {  console.log('bonus re-rendered')}
            <h1 >Bonous Component</h1>

            <h3>Total Point: {bonousState.points}</h3>

            <button onClick={()=>{dispatch(incrementBonus())}}>Increment +</button>
        </div>
    )
}
export default Bonus;