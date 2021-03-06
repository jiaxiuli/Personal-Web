import React from 'react';
import style from './common.less';
import Box from '@mui/material/Box';
import IntroItems from './IntroItems';
import StyledTextContainer from "../common/StyledTextContainer";
import { useTranslation } from "react-i18next";

const UniveristyInfo = ({path, schoolInfo}) => {
    const { t } = useTranslation();

    return (
        <Box className={style['school']}>
            <img
                alt='school-icon'
                className={style['school-icon']}
                src={path}
            />
            <Box className={style['school-Info']}>
                <StyledTextContainer fontWeight={600}>
                    {schoolInfo.name}
                </StyledTextContainer>
                <StyledTextContainer fontSize={16}>
                    <IntroItems
                        iconPath={'./icons/major.png'}
                        content={schoolInfo.major}
                        fromAbout={false}
                    />
                    <IntroItems
                        iconPath={'./icons/location.png'}
                        content={schoolInfo.location}
                        fromAbout={false}
                    />
                     <IntroItems
                        iconPath={'./icons/duration.png'}
                        content={schoolInfo.time}
                        fromAbout={false}
                    />
                </StyledTextContainer>
            </Box>
        </Box>
    )
};

export default UniveristyInfo;