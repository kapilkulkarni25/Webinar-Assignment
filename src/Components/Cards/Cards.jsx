import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

import NoResultsFound from '../Common/NoResultsFound';
import Card from './Card';
import './Card.css';

import { useSelector } from 'react-redux';


const UserCard = () => {

    const userData = useSelector((state) => state.webinarData.filteredWebinars);

    if (userData.length === 0) {
        return <NoResultsFound />
    }

    return (
        <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
            <Grid container className="container">
                {userData.map((user) => (
                    <Card key={user.id} instructorInfo={user} />
                ))}
            </Grid>
        </Box>
    );
};

export default UserCard;