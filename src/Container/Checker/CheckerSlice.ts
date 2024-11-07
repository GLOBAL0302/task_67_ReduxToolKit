import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    value:'',
    code:'1234',
    checked: false
}



export const checkerSlice = createSlice({
    name:'checker',
    initialState,
    reducers:{
        addNumber:(state, action:PayloadAction<number>)=>{
            state.value = state.value + action.payload
        }
    }
});

export const checkerReducer = checkerSlice.reducer;
export const {addNumber} = checkerSlice.actions
