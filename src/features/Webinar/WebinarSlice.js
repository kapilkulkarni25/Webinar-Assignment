import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_USER_DATA } from "../../assets/Data/data";
import { generateRandomColor } from "../../utils/utils";

export const webinarSlice = createSlice({
    name: "webinarData",
    initialState: {
        webinars: INITIAL_USER_DATA,
        filteredWebinars: INITIAL_USER_DATA,
        searchQuery: '',
        selectedTopic: [],
    },
    reducers: {
        addWebinar: (state, action) => {
            const newWebinar = {
                id: crypto.randomUUID(),
                accentColor: generateRandomColor(),
                ...action.payload,
            };
            state.webinars.push(newWebinar);
            state.filteredWebinars = state.webinars;
        },
        deleteWebinar: (state, action) => {
            const webinarId = action.payload;
            state.webinars = state.webinars.filter((webinar) => webinar.id !== webinarId);
            state.filteredWebinars = state.filteredWebinars.filter((webinar) => webinar.id !== webinarId);
        },
        updateWebinar: (state, action) => {
            const webinarIndex = state.webinars.findIndex(webinar => webinar.id === action.payload.id);
            if (webinarIndex >= 0) {
                state.webinars[webinarIndex] = { ...state.webinars[webinarIndex], ...action.payload };
                state.filteredWebinars[webinarIndex] = { ...state.filteredWebinars[webinarIndex], ...action.payload };
            }
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
            const searchQueryLower = state.searchQuery.toLowerCase();
            state.filteredWebinars = state.webinars.filter((webinar) =>
                Object.values(webinar).some((value) =>
                    String(value).toLowerCase().includes(searchQueryLower)
                ) &&
                (state.selectedTopic.length === 0 || state.selectedTopic.every(topic => webinar.topics.includes(topic)))
            );
        },
        setSelectedTopic: (state, action) => {
            const selectedTopics = action.payload;
            state.selectedTopic = selectedTopics;
            const searchQueryLower = state.searchQuery.toLowerCase();

            // check if topic exists inside the topics array for each webinar
            state.filteredWebinars = state.webinars.filter((webinar) =>
                Object.values(webinar).some((value) =>
                    String(value).toLowerCase().includes(searchQueryLower)
                ) &&
                (selectedTopics.length === 0 || selectedTopics.every(topic => webinar.topics.includes(topic)))
            );
        },
        resetFilters: (state) => {
            state.searchQuery = '';
            state.selectedTopic = [];
            state.filteredWebinars = state.webinars;
        },
    },
});

export const {
    addWebinar,
    deleteWebinar,
    updateWebinar,
    setSearchQuery,
    setSelectedTopic,
    resetFilters
} = webinarSlice.actions;

export default webinarSlice.reducer;
