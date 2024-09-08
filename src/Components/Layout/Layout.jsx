import Header from '../Header/Header';
import WebinarPopup from '../Popup/WebinarPopup';
import WebinarLayout from './WebinarLayout';

const AppLayout = () => {
    return (
        <>
            <Header />
            <WebinarLayout />
            <WebinarPopup />
        </>
    )
}

export default AppLayout