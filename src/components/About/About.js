/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 17:55:53
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/About/About.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './About.less';
import StyledTextContainer from "../common/StyledTextContainer";
import TitleContainer from "../common/TitleContainer";
import FlexBox from "../common/FlexBox";
import IntroItems from "../common/IntroItems/IntroItems";
import { useTranslation } from "react-i18next";

const About  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box
            className={style.main}
            style={{ minHeight: 'calc(100vh - 72px)' }}
        >
            <TitleContainer title={t('description.about')}/>
            <FlexBox>
                <Box className={style['text-container']}>
                    <StyledTextContainer fontWeight={600}>
                        {t('description.about_welcome')}<br />
                        {t('description.about_Iam')}
                    </StyledTextContainer>
                    <StyledTextContainer fontSize='16px'>
                        <IntroItems
                            iconPath={'./icons/graduate_icon.png'}
                            content={t('description.about_graduate')}/>
                        <IntroItems
                            iconPath={'./icons/work_icon.png'}
                            content={t('description.about_current')}/>
                        <IntroItems
                            iconPath={'./icons/learn_icon.png'}
                            content={t('description.about_learn')}/>
                        <IntroItems
                            iconPath={'./icons/deploy_icon.png'}
                            content={t('description.about_deploy')}/>
                        <IntroItems
                            iconPath={'./icons/passion_icon.png'}
                            content={t('description.about_passion')}/>
                        <IntroItems
                            iconPath={'./icons/music_icon.png'}
                            content={t('description.about_music')}/>
                    </StyledTextContainer>
                </Box>
            </FlexBox>
        </Box>
    );  
};

export default About;