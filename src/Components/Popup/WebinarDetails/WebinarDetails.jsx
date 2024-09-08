import { InputLabel, TextField } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import { ErrorMessage } from 'formik';

import videoImg from '../../../assets/Images/video.png';
import './WebinarDetails.css';

import PropTypes from 'prop-types';


const WebinarDetails = ({ handleChange, setFieldValue, values, errors, touched }) => {
    return (
        <div className='form-section-wrapper webinar-details-wrapper'>
            <div className="form-section-header">
                <img src={videoImg} alt="video image" />
            </div>
            <div style={{ width: "100%" }}>
                <h2 className="form-section-title">Webinar Details</h2>
                <InputLabel htmlFor="webinarTitle" className="form-input-label">
                    Webinar Title <span style={{ color: 'rgba(190,24,24,1)' }}>*</span>
                </InputLabel>
                <TextField
                    autoComplete='off'
                    id="webinarTitle"
                    name="webinarTitle"
                    type="text"
                    placeholder='Type the webinar title'
                    className="form-input"
                    fullWidth
                    onChange={handleChange}
                    value={values.webinarTitle}
                    error={touched.webinarTitle && Boolean(errors.webinarTitle)}
                    helperText={<ErrorMessage name="webinarTitle" />}
                />

                <div className="date-time-container">
                    <div className="date-time-wrap">
                        <InputLabel htmlFor="startDate" className="form-input-label">
                            Start Date <span style={{ color: 'rgba(190,24,24,1)' }}>*</span>
                        </InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                id="startDate"
                                name="startDate"
                                type="date"
                                className="form-input form-input-date"
                                value={values.startDate ? dayjs(values.startDate) : null}
                                onChange={(date) => setFieldValue('startDate', date ? dayjs(date).format('YYYY-MM-DD') : '')}
                                slots={{
                                    openPickerIcon: CalendarTodayOutlinedIcon,
                                }}
                                slotProps={{
                                    textField: {
                                        placeholder: "Type start data",
                                        variant: 'outlined',
                                        error: Boolean(errors.startDate),
                                        helperText: touched.startDate && errors.startDate
                                    },
                                }}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className="date-time-wrap">
                        <InputLabel htmlFor="startTime" className="form-input-label">
                            Start Time <span style={{ color: 'rgba(190,24,24,1)' }}>*</span>
                        </InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                id="startTime"
                                name="startTime"
                                type="time"
                                ampm={false}
                                value={values.startTime ? dayjs(values.startTime, 'HH:mm') : null}
                                onChange={(time) => setFieldValue('startTime', time ? dayjs(time).format('HH:mm') : '')}
                                className="form-input form-input-time"
                                slots={{
                                    openPickerIcon: QueryBuilderOutlinedIcon,
                                }}
                                slotProps={{
                                    textField: {
                                        placeholder: "Type start time",
                                        error: Boolean(errors.startTime),
                                        helperText: touched.startTime && errors.startTime
                                    },
                                }}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className="date-time-wrap">
                        <InputLabel htmlFor="endTime" className="form-input-label">
                            End Time <span style={{ color: 'rgba(190,24,24,1)' }}>*</span>
                        </InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                id="endTime"
                                name="endTime"
                                type="time"
                                ampm={false}
                                value={values.endTime ? dayjs(values.endTime, 'HH:mm') : null}
                                onChange={(time) => setFieldValue('endTime', time ? dayjs(time).format('HH:mm') : '')}
                                className="form-input form-input-time"
                                slots={{
                                    openPickerIcon: QueryBuilderOutlinedIcon,
                                }}
                                slotProps={{
                                    textField: {
                                        placeholder: "Type end time",
                                        error: Boolean(errors.endTime),
                                        helperText: touched.endTime && errors.endTime
                                    },
                                }}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebinarDetails;


WebinarDetails.propTypes = {
    handleChange: PropTypes.func,
    setFieldValue: PropTypes.func,
    values: PropTypes.object,
    errors: PropTypes.object,
    touched: PropTypes.object,
}
