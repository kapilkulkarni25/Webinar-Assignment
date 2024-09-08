import { Box, Modal } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Formik, Form } from 'formik';
import { validationSchema } from './Schema/Validations';

import { useDispatch, useSelector } from 'react-redux';
import { addWebinar, updateWebinar } from '../../features/Webinar/WebinarSlice';
import { closeModal } from '../../features/Modal/ModalSlice';


import './WebinarPopup.css';
import { formatFormData } from '../../utils/utils';
import { INITIAL_FORM_DATA } from '../../assets/Data/formData';

import { StyledButton } from '../Common/Button';
import WebinarDetails from './WebinarDetails/WebinarDetails';
import InstructorDetails from './InstructorDetails/InstructorDetails';



const WebinarPopup = () => {
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.modalData.isOpen);
    const editUserData = useSelector((state) => state.modalData.webinarData);

    const initialFormValues = editUserData || INITIAL_FORM_DATA;

    const handleClose = () => {
        dispatch(closeModal());
    };

    const handleSubmit = (values, { resetForm }) => {
        const formData = formatFormData(values);
        if (editUserData) {
            dispatch(updateWebinar(formData));
        } else {
            dispatch(addWebinar(formData));
        }
        dispatch(closeModal());
        resetForm();
    };

    return (
        <Modal
            open={modalState}
            onClose={handleClose}
            slotProps={{ backdrop: { style: { backdropFilter: 'blur(10px)' } } }}
        >
            <Box className="popup-modal">
                <div className="form-header-wrap">
                    <div className="form-header">
                        <p className='content-title'>Create webinar</p>
                        <CloseOutlinedIcon className="popup-close" onClick={handleClose} />
                    </div>
                </div>
                <Formik
                    initialValues={initialFormValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                >
                    {({ handleChange, values, setFieldValue, errors, touched }) => (
                        <Form>
                            <InstructorDetails
                                handleChange={handleChange}
                                values={values}
                                setFieldValue={setFieldValue}
                                errors={errors}
                                touched={touched}
                            />

                            <WebinarDetails
                                handleChange={handleChange}
                                values={values}
                                setFieldValue={setFieldValue}
                                errors={errors}
                                touched={touched}
                            />

                            <div className="form-action-wrap">
                                <StyledButton type="submit" className="createButton">
                                    {editUserData ? 'Update Webinar' : 'Create Webinar'}
                                </StyledButton>
                                <StyledButton type="tertiary" className="cancelButton" onClick={handleClose}>
                                    Cancel
                                </StyledButton>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Modal>
    );
};

export default WebinarPopup;
