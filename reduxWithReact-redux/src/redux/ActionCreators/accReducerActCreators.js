import {
    inc,
    dec,
    incByAmt,
    getAccUserPending,
    getAccUserFulfilled,
    getAccUserRejected
} 
from '../Actions/accountReducerActions';
import axios from 'axios';
export function increment(){
    //returning the action
    return {type:inc}
}

export function decrement(){
    return {type:dec}
}

export function incrementByAmount(value){
    return {type:incByAmt,payload:value}
}

export function getUserAccount(id){
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

function getAccountUserFulfilled(value){
    return{type:getAccUserFulfilled,payload:value}
}
 function getAccountUserPending(){
    return{type:getAccUserPending}
}
 function getAccountUserRejected(err){
    return{type:getAccUserRejected,error:err.message}
}
