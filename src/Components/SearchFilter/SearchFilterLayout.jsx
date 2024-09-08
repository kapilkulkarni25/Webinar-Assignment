import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import Grid from '@mui/material/Grid2';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setSelectedTopic } from '../../features/Webinar/WebinarSlice';

import './Searchfilter.css';

import { SELECT_TOPICS } from '../../assets/Data/topics';
import searchIcon from '../../assets/Images/search.png';

const SearchFilter = () => {
    const dispatch = useDispatch();
    const { searchQuery, selectedTopic } = useSelector((state) => state.webinarData);

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleTopicChange = (e) => {
        const value = e.target.value;
        // Clear selected Topic if empty string is selected
        dispatch(setSelectedTopic(value ? [value] : []));
    };

    return (
        <div className='search-wrapper container'>
            <Grid container alignItems={'center'} justifyContent={'space-between'}>
                <OutlinedInput
                    className='search-input'
                    id="search-webinar-input"
                    autoComplete='off'
                    startAdornment={
                        <InputAdornment position="start">
                            <img src={searchIcon} alt="search icon" />
                        </InputAdornment>
                    }
                    placeholder='Search for webinar'
                    value={searchQuery}
                    size='small'
                    onChange={handleSearchChange}
                />

                <FormControl sx={{ width: "220px" }} size="medium">
                    <InputLabel className='select-filter-label' id="topic-select-label">Topic</InputLabel>
                    <Select
                        labelId="topic-select-label"
                        id="topic-select"
                        value={selectedTopic[0] || ''}
                        label="Topic"
                        className='select-filter'
                        onChange={handleTopicChange}
                        size='small'
                        IconComponent={() => <KeyboardArrowDownOutlinedIcon className='topic-select-icon' />}
                    >
                        <MenuItem value="">
                            All Topics
                        </MenuItem>
                        {SELECT_TOPICS.map((topic) => (
                            <MenuItem key={topic} value={topic}>
                                {topic}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </div>
    );
};

export default SearchFilter;
