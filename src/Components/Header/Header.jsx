import { useDispatch } from 'react-redux';
import './header.css';
import { openModal } from '../../features/Modal/ModalSlice';
import { StyledButton } from '../Common/Button';

const Header = () => {

    const dispatch = useDispatch();

    const handleAddWebinar = () => {
        dispatch(openModal(null)); // Open empty form for adding
    };

    return (
        <header>
            <div className='container header-container'>
                <div className='content-title'>Webinar</div>
                <StyledButton type="primary" variant="contained" onClick={handleAddWebinar}>Add Webinar</StyledButton>
            </div>
        </header>
    )
}

export default Header