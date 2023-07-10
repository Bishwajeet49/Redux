import{ incBonous } from '../Actions/bonusReducerAction';
const bonousInitialState={points:0};
function bonousReducer(state=bonousInitialState,action){
    switch(action.type){
        case incBonous:
            return {points:state.points +1};
        
        // case incByAmt:
        //     if(action.payload>=100)
        //     return {points:state.points+1}

        default: return state;
    }
}
export default  bonousReducer;