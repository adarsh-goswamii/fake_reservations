import { configureStore, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "state",
    initialState: {
        loggedin: false,
        admin: false,
        userId: -123, 
        update: false,
        userEmail: '', 
        stations: []
    },

    reducers: {
        toggleLoggedin(state) {
            state.loggedin= !state.loggedin;
        }, 
        toggleAdmin(state) {
            state.admin= !state.admin;
        }, 
        setUserId(state, data) {
            state.userId= data.payload;
        }, 
        toggleUpdate(state) {
            state.update= !state.update;
        }, 
        setUserName(state, action) {
            state.userEmail= action.payload;
        },
        setStations(state, action) {
            state.stations= action.payload;
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