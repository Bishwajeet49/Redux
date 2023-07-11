
import { useSelector, useDispatch} from 'react-redux';
import { increment } from './redux/slices/bonusSlice';
function Bonus(){
   const bonousState=useSelector(state=>state.bns);
  console.log('bonus called');
  const dispatch=useDispatch();

    return(


        <div style={{textAlign:'center'}}>
        {  console.log('bonus re-rendered')}
            <h1 >Bonous Component</h1>

            <h3>Total Point: {bonousState.points}</h3>

            <button onClick={()=>{dispatch(increment())}}>Increment +</button>
        </div>
    )
}
export default Bonus;