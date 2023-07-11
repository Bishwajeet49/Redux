import { createAction } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";

//createing  action creator
export const increment= createAction('reward/increment');

export const decrement= createAction('reward/decrement')


console.log(increment);

const initialState={points:0};
const callback=(builder)=>{
        console.log(builder.addCase);
        //addcase take two cb action creator and our case function
        builder.addCase(increment,(state, action)=>{
            state.points +=1;
        })
        .addCase(decrement,(state,action)=>{
            state.points -=1;
        })
        //or
        // builder.addCase(decrement,(state,action)=>{
        //     state.points -=1;
        // })
        //becuase addCase function return bulder object itself so we can chain multiple addCases
}
const rewardReducer=createReducer(initialState,callback)

export default rewardReducer;


// const builder = {
//     addCase(typeOrActionCreator, reducer) {
//       if (process.env.NODE_ENV !== 'production') {
//         if (actionMatchers.length > 0) {
//           throw new Error(
//             '`builder.addCase` should only be called before calling `builder.addMatcher`'
//           );
//         }
//         if (defaultCaseReducer) {
//           throw new Error(
//             '`builder.addCase` should only be called before calling `builder.addDefaultCase`'
//           );
//         }
//       }
//       const type =
//         typeof typeOrActionCreator === 'string'
//           ? typeOrActionCreator
//           : typeOrActionCreator.type;
//       if (type in actionsMap) {
//         throw new Error(
//           'addCase cannot be called with two reducers for the same action type'
//         );
//       }
//       actionsMap[type] = reducer;
//       return builder;
//     },
//     addMatcher(matcher, reducer) {
//       if (process.env.NODE_ENV !== 'production') {
//         if (defaultCaseReducer) {
//           throw new Error(
//             '`builder.addMatcher` should only be called before calling `builder.addDefaultCase`'
//           );
//         }
//       }
//       actionMatchers.push({ matcher, reducer });
//       return builder;
//     },
//     addDefaultCase(reducer) {
//       if (process.env.NODE_ENV !== 'production') {
//         if (defaultCaseReducer) {
//           throw new Error('`builder.addDefaultCase` can only be called once');
//         }
//       }
//       defaultCaseReducer = reducer;
//       return builder;
//     },
//   };
  