import React from 'react';
import Box from '@mui/material/Box';
import StyledTextContainer from "../common/StyledTextContainer";
import WorkDetailInfo from './WorkDetailInfo';

const CompanyName = ({ name, startTime, endTime, location, position, type }) => {
    return (
        <Box>
            <StyledTextContainer
                mb={2}
                sx={{
                    fontSize: 25,
                    fontWeight: 600,
                    "@media screen and (max-width: 1300px)": {
                        fontSize: 20,
                    }
                }}
            >
                {name}
            </StyledTextContainer>
            <WorkDetailInfo 
                startTime={startTime}
                endTime={endTime}
                location={location}
                position={position}
                type={type}
            />
        </Box>
    )
}

export default CompanyName