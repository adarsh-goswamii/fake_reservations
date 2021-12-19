import { configureStore, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "state",
    initialState: {
        loggedin: false,
        admin: false,
        userId: -123
    },

    reducers: {
        toggleLoggedin(state) {
            state.loggedin= !state.loggedin;
        }, 
        toggleAdmin(state) {
            state.admin= !state.admin;
        }, 
        setUserId(state, payload) {
            console.log(payload);
        }
    }
})

const store = configureStore({
    reducer: {
        "state": slice.reducer
    }
});

export default store;
export const actions= slice.actions;