import dayjs from "dayjs";
import defaulImg from '../assets/Images/default.jpg';


// Format Date for Cards
export function formatDate(dateString) {
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const monthsOfYear = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const date = new Date(dateString);

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const dayOfMonth = date.getDate();

    return `${dayOfWeek} • ${month} ${dayOfMonth}`;
}

// Generate Background color for cards
export function generateRandomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color.padStart(6, '0');
}

// Format form values before submission
export const formatFormData = (values) => ({
    ...values,
    userAvatar: values.userAvatar || defaulImg,
    startDate: values.startDate ? dayjs(values.startDate).format('YYYY-MM-DD') : null,
    startTime: values.startTime || null,
    endTime: values.endTime || null,
});



// Check if the startDate selected is now or in the future and not before today
export const isFutureDate = (selectedDate) => {
    if (!selectedDate || isNaN(Date.parse(selectedDate))) return false; // Handle empty or invalid dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateToCheck = new Date(selectedDate);
    return dateToCheck >= today;
};

// Start time should be greater than current time if start date is today
export const isTimeLaterThanNow = (selectedDate, selectedTime) => {
    if (!selectedDate || !selectedTime) return false;

    const selectedDateTime = dayjs(`${dayjs(selectedDate).format('YYYY-MM-DD')}T${selectedTime}`);
    const now = dayjs();

    return selectedDateTime.isAfter(now);
};

