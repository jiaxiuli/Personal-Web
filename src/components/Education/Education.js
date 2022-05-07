/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 17:55:37
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/Education/Education.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './Education.less';
import StyledTextContainer from "../common/StyledTextContainer";
import TitleContainer from "../common/TitleContainer";
import FlexBox from "../common/FlexBox";
import { useTranslation } from "react-i18next";

const Education  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box
            className={style.main}
            style={{ minHeight: 'calc(100vh - 72px)' }}
        >
            <TitleContainer title={t('description.edu')}/>
            <FlexBox>
                <Box className={style['text-container']}>
                    <StyledTextContainer>
                        {t('description.undergraduate')}
                    </StyledTextContainer>
                    <StyledTextContainer>
                        {t('description.post_undergraduate')}
                    </StyledTextContainer>
                </Box>
            </FlexBox>
        </Box>
    );  
};

export default Education;