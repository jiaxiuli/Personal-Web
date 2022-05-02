import React from "react";
import Box from '@mui/material/Box';
import style from './About.less';
import StyledTextContainer from "../common/StyledTextContainer";
import TitleContainer from "../common/TitleContainer";
import FlexBox from "../common/FlexBox";
import { useTranslation } from "react-i18next";

const About  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box className={style.main}>
            <TitleContainer title={t('description.about')}/>
            <FlexBox>
                <Box className={style['text-container']}>
                    <StyledTextContainer>
                        {t('description.about_content_p1')}
                    </StyledTextContainer>
                    <StyledTextContainer>
                        {t('description.about_content_p2')}
                    </StyledTextContainer>
                    <StyledTextContainer>
                        {t('description.about_content_p3')}
                    </StyledTextContainer>
                    <StyledTextContainer>
                        {t('description.about_content_p4')}
                    </StyledTextContainer>
                </Box>
            </FlexBox>
        </Box>
    );  
};

export default About;