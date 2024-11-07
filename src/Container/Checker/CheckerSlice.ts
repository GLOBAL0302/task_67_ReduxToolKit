import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    value: '',
    code: '2345',
    checked: ""
}

export const checkerSlice = createSlice({
    name: 'checker',
    initialState,
    reducers: {
        addNumber: (state, action: PayloadAction<string>) => {
            state.value = state.value + action.payload
        },
        deleteOneSymbol: (state) => {
            state.checked = ""
            if (state.value.length > 1) {
                state.value = state.value.substring(0, state.value.length - 1)
            } else {
                state.value = ''
            }
        },
        deleteAll: (state) => {
            state.value = ""
            state.checked = ""
        },
        checkCode: (state) => {
            state.checked = state.value === state.code ? "green" : "red";
        }
    }
});

export const checkerReducer = checkerSlice.reducer;
export const {addNumber, deleteAll, deleteOneSymbol, checkCode} = checkerSlice.actions
