import { createSlice } from "@reduxjs/toolkit";
const initialState={points:0};
const incrementByAmount='account/incrementByAmount';
const bonusSlice=createSlice({
    name:'bonus',
    initialState,
    reducers:{
        //bonus/increment
        increment(state){
           state.points +=1;
        }
    },
    extraReducers:(builder)=>{
    builder
     .addCase(incrementByAmount, (state, action) => {
         if(action.payload>=100){
            state.points+=1;
         }
     })

     //! You can chain calls, or have separate `builder.addCase()` lines each time
    //* .addCase(decrement, (state, action) => {})
     //! You can match a range of action types
    /*
     .addMatcher(
       isRejectedAction,
       //! `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
       (state, action) => {}
     )

     */
     //! and provide a default case if no other handlers matched
    //* .addDefaultCase((state, action) => {})
    }
    
})

export const{increment}=bonusSlice.actions; 
export default bonusSlice.reducer;