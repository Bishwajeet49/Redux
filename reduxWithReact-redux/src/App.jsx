import Account from './Account.jsx';
import Bonus from './Bonus.jsx';
import { useSelector } from 'react-redux';
function App(){
  const accState=useSelector((state)=>{
    return state.acc;
  })
  const bonusState=useSelector((state)=>{
    return state.bns;
  })
  console.log('App called')
  return(
    <div>
    {console.log('App-rerender')}
      <h1>App</h1>
      <h4>Cuurent Ammount:
      {accState.pending?'Loading...':
          accState.error?accState.error:accState.ammount}
      </h4> 
      <h4>Total Bonous:{bonusState.points}</h4> 
      <hr />
      <Account></Account>
      <hr />
      <Bonus></Bonus>
      <hr />
      
    </div>
  )
}
export default App;
