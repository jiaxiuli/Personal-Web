import React from 'react';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StyledTextContainer from "../common/StyledTextContainer";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import style from './common.less';

const ProjectInfo = ({ role, startTime, endTime }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                "@media screen and (max-width: 1000px)": {
                    flexDirection: 'row',
                }
            }}
        >
            <Box className={style['company-name-detail']}>
                <AccountBoxIcon
                    sx={{
                        mr: 2,
                        fontSize: 30,
                        "@media screen and (max-width: 1000px)": {
                            fontSize: 20,
                        }
                    }}
                />
                <StyledTextContainer
                    sx={{
                        fontSize: 16,
                        "@media screen and (max-width: 1000px)": {
                            fontSize: 14,
                        }
                    }}
                >
                    {role}
                </StyledTextContainer>
            </Box>

            <Box className={style['company-name-detail']}>
                <AccessTimeFilledIcon
                    sx={{
                        mr: 2,
                        fontSize: 30,
                        "@media screen and (max-width: 1000px)": {
                            fontSize: 20,
                            ml: 2
                        }
                    }}
                />
                <StyledTextContainer
                    sx={{
                        fontSize: 16,
                        "@media screen and (max-width: 1000px)": {
                            fontSize: 14,
                        }
                    }}
                >
                    {`${startTime} - ${endTime}`}
                </StyledTextContainer>
            </Box>


        </Box>
    )
}

export default ProjectInfo;