import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

//createSlice takes a object having 3 property as

/*
1> name of slice , this name will be appendend before action type followed by slash '/
2> initialState , this will be the initial state for the particular reducer which we will get later from the slice
3> object full of reducer functions
*/
const initialState={ammount:1}
const accountSlice=createSlice({
    name:'account',
    initialState,
    reducers:{
        //account/increment
        increment:(state)=>{
            state.ammount=state.ammount+1;
        },

        decrement:(state)=>{
            state.ammount -= 1;
        },
        incrementByAmount:(state,action)=>{
            state.ammount += action.payload;
        }
    }
    ,
    extraReducers:(builder)=>{
             builder.addCase(fetchUserAmtById.fulfilled, (state, action) => {
                state.ammount=action.payload;
                state.pending=false;
            })
            builder.addCase(fetchUserAmtById.pending, (state, action) => {
                state.pending=true;
            })
            builder.addCase(fetchUserAmtById.rejected, (state, action) => {
                 state.error=action.error.message;
                 state.pending=false;
             })
    }
}
)

const asynFunction=async (userId, thunkAPI) => {
   //throgh thunkapi object we can get dispatch and getState function
    const response = await fetch('http://localhost:3000/account/'+userId);
    const data = await response.json();
    return data.ammount;
  }
  //!createAsyncThunk returns a standard Redux thunk action creator. 
export const fetchUserAmtById=createAsyncThunk( 'account/fetchUserAmtById',asynFunction);



// Action creators are generated for each case reducer function
export const { 
    increment, 
    decrement, 
    incrementByAmount 
} =  accountSlice.actions

export default accountSlice.reducer;