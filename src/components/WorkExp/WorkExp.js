/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 17:54:26
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/WorkExp/WorkExp.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './WorkExp.less';
import StyledTextContainer from "../common/StyledTextContainer";
import TitleContainer from "../common/TitleContainer";
import FlexBox from "../common/FlexBox";
import { useTranslation } from "react-i18next";

const WorkExp  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box
            className={style.main}
            style={{ 
                minHeight: 'calc(100vh - 72px)' 
            }}
        >
            <TitleContainer title={t('description.work')}/>
            <FlexBox>
                <Box className={style['text-container']}>
                    <StyledTextContainer>
                        {t('description.work_content')}
                    </StyledTextContainer>
                </Box>
            </FlexBox>
        </Box>
    );  
};

export default WorkExp;