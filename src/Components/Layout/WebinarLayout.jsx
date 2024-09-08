import UserCard from '../Cards/Cards';
import SearchFilter from '../SearchFilter/SearchFilterLayout';

import './Layout.css'


const WebinarLayout = () => {

    return (
        <div className="webinar-content-wrapper">
            <div className="scroll">
                <SearchFilter />
                <UserCard />
            </div>
        </div>
    );
};

export default WebinarLayout;