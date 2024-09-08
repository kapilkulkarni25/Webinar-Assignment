import './InstructorDetails.css';
import usersImg from '../../../assets/Images/popup-icon.png'
import PropTypes from 'prop-types';

import { Autocomplete, InputLabel, TextField } from '@mui/material';

import InstructorImage from './InstructorImage';
import { SELECT_TOPICS } from '../../../assets/Data/topics';



const InstructorDetails = ({ handleChange, values, setFieldValue, errors, touched }) => {
    return (
        <div className='form-section-wrapper'>
            <div className="form-section-header">
                <img src={usersImg} alt="popup-users" />
            </div>
            <div className="form-content-wrapper">
                <h2 className="form-section-title">Instructor Details</h2>
                <div className="form-content">
                    <div className="form-content-row">
                        <div className='form-content-column'>
                            <InputLabel htmlFor="instructorName" className="form-input-label">
                                Instructor Name <span style={{ color: 'rgba(190,24,24,1)' }}>*</span>
                            </InputLabel>
                            <TextField
                                autoComplete='off'
                                id="instructorName"
                                name="instructorName"
                                type="text"
                                fullWidth
                                className="form-input form-input-name"
                                placeholder="Type the instructor name"
                                onChange={handleChange}
                                value={values.instructorName}
                                error={touched.instructorName && Boolean(errors.instructorName)}
                                helperText={touched.instructorName && errors.instructorName}
                            />

                            <InputLabel htmlFor="instructorRole" className="form-input-label">
                                Instructor Role <span style={{ color: 'rgba(190,24,24,1)' }}>*</span>
                            </InputLabel>
                            <TextField
                                autoComplete='off'
                                id="instructorRole"
                                name="instructorRole"
                                type="text"
                                fullWidth
                                className="form-input"
                                placeholder="Type the instructor role"
                                onChange={handleChange}
                                value={values.instructorRole}
                                error={touched.instructorRole && Boolean(errors.instructorRole)}
                                helperText={touched.instructorRole && errors.instructorRole}
                            />
                        </div>

                        <InstructorImage setFieldValue={setFieldValue} value={values} />
                    </div>
                    <div className="form-content-row">
                        <div className='form-content-column'>

                            <InputLabel htmlFor="instructorCompany" className="form-input-label">
                                Instructor Company <span style={{ color: 'rgba(190,24,24,1)' }}>*</span>
                            </InputLabel>
                            <TextField
                                autoComplete='off'
                                id="instructorCompany"
                                name="instructorCompany"
                                type="text"
                                fullWidth
                                className="form-input"
                                placeholder="Type the instructor company"
                                onChange={handleChange}
                                value={values.instructorCompany}
                                error={touched.instructorCompany && Boolean(errors.instructorCompany)}
                                helperText={touched.instructorCompany && errors.instructorCompany}
                            />
                        </div>

                        <Autocomplete
                            className="form-input form-input-dropdown"
                            disablePortal
                            multiple
                            forcePopupIcon={false}
                            options={SELECT_TOPICS}
                            value={values.topics || []}
                            onChange={(event, newValue) => setFieldValue('topics', newValue)}
                            sx={{ width: 300 }}
                            renderInput={
                                (params) =>
                                    <>
                                        <InputLabel htmlFor="select-topic" className="form-input-label">
                                            Topics <span style={{ color: 'rgba(190,24,24,1)' }}>*</span>
                                        </InputLabel>
                                        <TextField
                                            autoComplete='off' id="select-topic" error={touched.topics && Boolean(errors.topics)}
                                            helperText={touched.topics && errors.topics} className="form-input" placeholder='Type the Topics' {...params} />
                                    </>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorDetails;

InstructorDetails.propTypes = {
    handleChange: PropTypes.func,
    setFieldValue: PropTypes.func,
    values: PropTypes.object,
    errors: PropTypes.object,
    touched: PropTypes.object,
}
