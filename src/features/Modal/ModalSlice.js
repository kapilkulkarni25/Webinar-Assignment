import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modalState",
    initialState: {
        isOpen: false,
        webinarData: null,
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.webinarData = action.payload || null;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.webinarData = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
