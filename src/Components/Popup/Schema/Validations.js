import * as Yup from 'yup';
import { isFutureDate, isTimeLaterThanNow } from '../../../utils/utils';

export const validationSchema = Yup.object({
    instructorName: Yup.string().required('Instructor Name is required'),
    instructorRole: Yup.string().required('Instructor Role is required'),
    instructorCompany: Yup.string().required('Instructor Company is required'),
    webinarTitle: Yup.string().required('Webinar Title is required'),
    topics: Yup.array()
        .of(Yup.string().required('Topic is required'))
        .min(1, 'At least one topic is required')
        .required('Topics are required'),
    startDate: Yup.date()
        .nullable()
        .required('Start Date is required')
        .typeError('Invalid date format')
        .test('isFutureDate', 'Start Date must be today or in the future', (value) => {
            if (value === null) return false;
            return isFutureDate(value);
        }),
    startTime: Yup.string()
        .required('Start Time is required')
        .test('isFutureTime', 'Start Time must be later than the current time', function (value) {
            const { startDate } = this.parent;
            return value && isTimeLaterThanNow(startDate, value);
        }),
    endTime: Yup.string()
        .required('End Time is required'),
});
