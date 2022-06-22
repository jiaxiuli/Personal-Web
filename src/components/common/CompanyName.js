import React from 'react';
import Box from '@mui/material/Box';
import StyledTextContainer from "../common/StyledTextContainer";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import style from './common.less';

const CompanyName = ({ name, startTime, endTime, location, position }) => {
    return (
        <Box>
            <StyledTextContainer
                fontSize={25}
                fontWeight={600}
                mb={2}
            >
                {name}
            </StyledTextContainer>
            <Box>
                <Box className={style['company-name-detail']}>
                    <WorkIcon
                        sx={{
                            mr: 2,
                            fontSize: 30,
                            "@media screen and (max-width: 1000px)": {
                                fontSize: 25,
                            }
                        }}
                    />
                    <StyledTextContainer fontSize={20}>
                        {position}
                    </StyledTextContainer>
                </Box>

                <Box className={style['company-name-detail']}>
                    <AccessTimeFilledIcon
                        sx={{
                            mr: 2,
                            fontSize: 30,
                            "@media screen and (max-width: 1000px)": {
                                fontSize: 25,
                            }
                        }}
                    />
                    <StyledTextContainer fontSize={20}>
                        { `${startTime} - ${endTime}` }
                    </StyledTextContainer>
                </Box>

                <Box className={style['company-name-detail']}>
                    <LocationOnIcon
                        sx={{
                            mr: 2,
                            fontSize: 30,
                            "@media screen and (max-width: 1000px)": {
                                fontSize: 25,
                            }
                        }}
                    />
                    <StyledTextContainer fontSize={20}>
                        {location}
                    </StyledTextContainer>
                </Box>
            </Box>
        </Box>
    )
}

export default CompanyName