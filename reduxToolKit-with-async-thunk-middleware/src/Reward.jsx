
import { useSelector, useDispatch} from 'react-redux';
// import { increment } from './redux/slices/bonusSlice';
import { increment,decrement } from './redux/reducers/rewardReducer';
function Reward(){
   const bonousState=useSelector(state=>state.rwd);
  console.log('reward called');
  const dispatch=useDispatch();

    return(


        <div style={{textAlign:'center'}}>
        {  console.log('reward re-rendered')}
         <span>Note:-  the reducer and action creators is for this component is not made from createSlice() api 
         instead it is made by the createAction() and createReducer() api
         </span>
            <h1 >Reward Component</h1>

            <h3>Total Point: {bonousState.points}</h3>

            <button onClick={()=>{dispatch(increment())}}>Increment +</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement +</button>
        </div>
    )
}
export default Reward;