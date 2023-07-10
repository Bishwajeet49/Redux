import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment as inc,decrement as dec,incrementByAmount } from "./redux/ActionCreators/accReducerActCreators";
function Account(){
    const accState=useSelector((state)=>{
        return state.acc;
      })
    const dispatch=useDispatch();//return dispatch of redux store

    const [inpValue,setInpValue]=useState('');
    function handleIncrementByValue(e){
   
        e.preventDefault();
        dispatch(incrementByAmount(+inpValue))

    }
    function increment(){
        dispatch(inc())
      
    }
    function decrement(){
        dispatch(dec())
    }
    console.log('account ','called');
    return(
        <div style={{textAlign:'center'}}>
        {console.log('account-rerender')}
        <h1>Account</h1>
        <h3>Ammount: ${accState.ammount}</h3>
        <button onClick={increment}>increment+</button>&nbsp;
        <button onClick={decrement}>Decrement -</button><br /><br></br>
            <form onSubmit={handleIncrementByValue}>
            <input type="text" value={inpValue} onChange={e=>setInpValue(e.target.value)} />
            <input type="submit" value={`increment by ${inpValue}`} />
            </form>
        </div>
    )
}
export default Account;