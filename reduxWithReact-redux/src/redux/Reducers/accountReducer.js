import {
    inc,
    dec,
    incByAmt,
    getAccUserPending,
    getAccUserFulfilled,
    getAccUserRejected
} from '../Actions/accountReducerActions'

const accountInitialState={ammount:1};
let newStateRef;
function accountReducer(state=accountInitialState,action){
    switch(action.type){
        case inc:
            console.log('helow');
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
export default accountReducer;