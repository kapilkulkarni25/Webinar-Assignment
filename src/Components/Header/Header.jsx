import './header.css';
import { StyledButton } from '../Common/Button';

import { useDispatch } from 'react-redux';
import { openModal } from '../../features/Modal/ModalSlice';


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