import { configureStore } from "@reduxjs/toolkit";
import webinarData from '../features/Webinar/WebinarSlice';
import modalData from '../features/Modal/ModalSlice';

const store = configureStore({
    reducer: {
        webinarData,
        modalData,
    },
});

export default store;
