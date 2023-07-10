import axios from 'axios';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
const accountInitialState={ammount:1};
let newStateRef;


const inc='accoumt/increment';
const dec='accoumt/decrement';
const incByAmt='incByAmt';
const incBonous='bonus/incBonous';
const getAccUserPending= 'account/getUser/pending';
const getAccUserFulfilled= 'account/getUser/fullFilled';
const getAccUserRejected= 'account/getUser/rejected';

function accountReducer(state=accountInitialState,action){
    switch(action.type){
        case inc:
            /*we should not mutate our orignal state otherwise history tracking
              of the state could not be done .

              every update to the state should be immmutable i.e we suold return
              another object without directly mainpulating the orignal state */
              newStateRef= {ammount:state.ammount+1};
              return newStateRef; //creating new object ref so this update i immutable it will not affect our orignal
            // state.ammount=state.ammount+1;
        case dec:
            if(state.ammount==0) return state;
            return {ammount:state.ammount-1}
        case incByAmt:
            return {ammount:state.ammount+action.payload};
        case getAccUserPending:
            return {...state,pending:true}
        case getAccUserFulfilled:
            return {ammount:action.payload,pending:false};
        case getAccUserRejected:
            return {ammount:state.ammount,error:action.error,pending:false};

        default: return state;
    }
}

const bonousInitialState={points:0}
function bonousReducer(state=bonousInitialState,action){
    switch(action.type){
        case incBonous:
            return {points:state.points +1};
        
        case incByAmt:
            if(action.payload>=100)
            return {points:state.points+1}

        default: return state;
    }
}
const store=createStore(
    combineReducers({
        acc:accountReducer,
        bon:bonousReducer
    }),
    applyMiddleware(logger.default,thunk.default)
    );

/***************************** */
// console.log(store.getState());

// const action={type:'increment'}
// store.dispatch(action);

// console.log(store.getState());

/********************************* */
const history=[];

// whenever reducer will be called this callback will be executed
// store.subscribe(()=>{
// history.push(store.getState());
// console.log(history);
// })

// setInterval(()=>{
//       const action={type:'increment'}
// store.dispatch(action);  
// },2000)


/*************** */
// const mystate=store.getState();

// console.log(mystate);

// // mutating the orignal state

// mystate.ammount=1000;
// console.log("//after mutating orignal state value");
// console.log("//store.getState() does not return the value of the state instead it return the refrence of the state itself");
// console.log(mystate);



/*********************** */


// store.dispatch(action); 
// store.dispatch(action); 
// console.log(store.getState() )
//here we can clearly see that equality holds true, it means that
//whenever we return any new state from reducer in response of any action 
//than the golbal state of store starts pointing to the address of the returned
//state which is created somewhere in the heap , it break the prevous state link
/********* */
/*
if we mutate the previous state itself than the new address for the new state
will not be created and it still point to old state address in this way in react
when the newstate compared with oldstate the equality holds true indicating no
chnages in state so component will not be rendner thats why our state update shold
be immutable by creating new object.
*/
// console.log(store.getState()===newStateRef);

//!middle ware kya hota hai 
//* dispatch ek action ko dispatch karata hain to dispatched action
//* directly reducer ke pass chala gta hain or wo action preform ho jata hain
//*or state change ho jata hain 
//*agar iska bich me dispatch ko rokna hua or yadi koe or asynchronous
//* action lena para or us asynchronous action ka result pe hama state update karna para
//*to us case mai middleware use karta hain


//!Action creators
 function initUser(value){
return {type:init,payload:value}

    
}

function getUserAccount(id){
return async function (dispatch, getState){
    //must call an api to get the value and that value passed as payload to rdeucer

  //Async api call
  try{
         dispatch( getAccountUserPending());
         const response= await axios.get('http://localhost:3000/account/'+id);
         const data=response.data;
         dispatch( getAccountUserFulfilled(data.ammount));
  }
  catch(err){
   
        dispatch(getAccountUserRejected(err))
  }
    
}
}

// console.log('start');
// console.log(initUser());
// store.dispatch(initUser);  
// store.dispatch(getUser(1));//passing arguments
//after installing the redux thunk , reducer dispatch become so smart that it distingiush from
//function call and passing function , when we pass a function to dispatch instead of dispatching directly
//it call that function by passing agruments as dispatch and getState function
// console.log('End');
function increment(){
    //returning the action
    return {type:inc}
}
function decrement(){
    return {type:dec}
}
function incrementByAmount(value){
    return {type:incByAmt,payload:value}
}
function incrementBonus(){
    return {type:incBonous}
}
function getAccountUserFulfilled(value){
    return{type:getAccUserFulfilled,payload:value}
}
function getAccountUserPending(){
    return{type:getAccUserPending}
}
function getAccountUserRejected(err){
    console.log('here');
    return{type:getAccUserRejected,error:err.message}
}
console.log(store.dispatch(getUserAccount(1)));



