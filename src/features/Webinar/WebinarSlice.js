import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_USER_DATA } from "../../assets/Data/data";
import { formatDate, generateRandomColor } from "../../utils/utils";

export const webinarSlice = createSlice({
    name: "webinarData",
    initialState: {
        webinars: INITIAL_USER_DATA,
        filteredWebinars: INITIAL_USER_DATA,
        searchQuery: '',
        selectedTopic: '',
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
            const searchQueryLower = action.payload.toLowerCase();
            state.searchQuery = searchQueryLower;

            state.filteredWebinars = state.webinars.filter((webinar) => {
                const formattedDate = webinar.startDate ? formatDate(webinar.startDate).toLowerCase() : '';

                // Check if any field of the fields or formatted date includes the query
                const searchQueryMatch = Object.values(webinar).some((value) =>
                    String(value).toLowerCase().includes(searchQueryLower) || formattedDate.includes(searchQueryLower)
                );

                // Check if the webinar includes the selected topic
                const searchSelectedTopic = state.selectedTopic === '' || webinar.topics.includes(state.selectedTopic);

                return searchQueryMatch && searchSelectedTopic;
            });
        },
        setSelectedTopic: (state, action) => {

            state.selectedTopic = action.payload;
            const searchQueryLower = state.searchQuery.toLowerCase();

            state.filteredWebinars = state.webinars.filter((webinar) => {
                const formattedDate = webinar.startDate ? formatDate(webinar.startDate).toLowerCase() : '';

                const searchQueryMatch = Object.values(webinar).some((value) =>
                    String(value).toLowerCase().includes(searchQueryLower) || formattedDate.includes(searchQueryLower)
                );

                const searchSelectedTopic = state.selectedTopic === '' || webinar.topics.includes(state.selectedTopic);

                return searchQueryMatch && searchSelectedTopic;
            });
        },
    },
});

export const {
    addWebinar,
    deleteWebinar,
    updateWebinar,
    setSearchQuery,
    setSelectedTopic,
} = webinarSlice.actions;

export default webinarSlice.reducer;
