import { useState } from 'react';
import PropTypes from 'prop-types';

import { Paper, IconButton, InputLabel } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const InstructorImage = ({ setFieldValue, value }) => {
    const [imagePreview, setImagePreview] = useState(value.userAvatar || '');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!validTypes.includes(file.type)) {
                alert('Unsupported file type! Please upload a jpg, png, or gif image.')
                setFieldValue('userAvatar', '', false);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Show the image preview in modal
                setFieldValue('userAvatar', reader.result); // Store the image as base64
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className='form-content-column'>
            <InputLabel htmlFor="instructor-image" className="form-input-label">
                Instructor Image
            </InputLabel>
            <Paper variant="outlined" className="instructor-image-container">
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="instructor-image"
                    onChange={handleImageChange}
                />
                <label htmlFor="instructor-image" className='input-image-label' style={{ width: '100%', height: '100%' }}>
                    {imagePreview ? (
                        <img src={imagePreview} alt="Instructor" className="image-preview" />
                    ) : (
                        <IconButton component="span">
                            <AddOutlinedIcon className="instructor-image-icon" />
                        </IconButton>
                    )}
                </label>
            </Paper>
        </div>

    );
};

export default InstructorImage;

InstructorImage.propTypes = {
    setFieldValue: PropTypes.func,
    value: PropTypes.object,
}
