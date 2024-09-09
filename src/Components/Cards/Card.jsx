import { CardActions, CardContent } from '@mui/material'

import PropTypes from 'prop-types';

import { StyledButton } from '../Common/Button'
import { formatDate } from '../../utils/utils'

import { useDispatch } from 'react-redux';
import { deleteWebinar } from '../../features/Webinar/WebinarSlice';
import { openModal } from '../../features/Modal/ModalSlice';

const Card = ({ instructorInfo }) => {

    const {
        accentColor,
        instructorName,
        instructorRole,
        instructorCompany,
        userAvatar,
        topics,
        webinarTitle,
        startDate,
        startTime,
        endTime,
        id,
    } = instructorInfo;

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteWebinar(id));
    }

    const handleEdit = (user) => {
        dispatch(openModal(user));
    }

    return (
        <div className='card'>
            <CardContent className='card-wrapper'>
                <div className="card-header" style={{ backgroundColor: accentColor }}>
                    <div className="card-header-info">
                        <h2 className="card-name">{instructorName}</h2>
                        <p className="card-position">{instructorRole}</p>
                        <p className='card-company'>{instructorCompany}</p>
                    </div>
                    <img src={userAvatar} alt={`${instructorName}'s avatar`} className="card-img" />
                </div>
                <div className="card-info">
                    <p className="card-domain" style={{ color: accentColor }}>{topics.map((topic) => <span key={topic}>{topic} </span>)}</p>
                    <h3 className="card-topic">{webinarTitle}</h3>
                    <p className="card-date">{formatDate(startDate)}, {startTime} - {endTime}</p>
                </div>
            </CardContent>
            <CardActions className="card-actions" sx={{ padding: "20px 20px 17px 20px" }}>
                <StyledButton type="secondary" variant="contained" onClick={() => handleDelete(id)}>Delete</StyledButton>
                <StyledButton type='tertiary' variant='text' onClick={() => handleEdit(instructorInfo)}>Edit</StyledButton>
            </CardActions>
        </div>
    )
}

export default Card;


Card.propTypes = {
    instructorInfo: PropTypes.object,
}
