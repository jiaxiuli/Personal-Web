/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 17:54:19
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/Projects/Projects.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './Projects.less';
import StyledTextContainer from "../common/StyledTextContainer";
import TitleContainer from "../common/TitleContainer";
import FlexBox from "../common/FlexBox";
import { useTranslation } from "react-i18next";

const Projects  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box
            className={style.main}
            style={{ 
                minHeight: 'calc(100vh - 72px)' 
            }}
        >
            <TitleContainer title={t('description.project')}/>
            <FlexBox>
                <Box className={style['text-container']}>
                    <StyledTextContainer>
                        {/* {t('description.about_content')} */}
                    </StyledTextContainer>
                </Box>
            </FlexBox>
        </Box>
    );  
};

export default Projects;