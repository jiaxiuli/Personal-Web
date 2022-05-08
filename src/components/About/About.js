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
import StyledCard from "../common/StyledCard";
import Avatar from '@mui/material/Avatar';
import ResumeDownload from '../common/ResumeDownload';
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
                    <FlexBox>
                        <Avatar
                            variant="circular"
                            sx={{
                                width: 180,
                                height: 180,
                                marginBottom: '12px',
                                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                                "@media screen and (max-width: 1200px)": {
                                    width: 120,
                                    height: 120,
                                    marginBottom: '8px',
                                },
                                "@media screen and (max-width: 1000px)": {
                                    width: 80,
                                    height: 80,
                                    marginBottom: '8px',
                                },
                            }}
                            src="./about_photo.jpg"
                        />
                    </FlexBox>
                    <FlexBox>
                        <StyledTextContainer fontWeight={600}>
                            {t('description.about_hi')}
                        </StyledTextContainer>
                    </FlexBox>
                    <FlexBox>
                        <StyledTextContainer fontWeight={600}>
                            {t('description.about_welcome')}
                        </StyledTextContainer>
                    </FlexBox>
                    <FlexBox>
                       <ResumeDownload />
                    </FlexBox>
                    <Box sx={{
                        display: 'flex',
                        marginTop: '12px',
                        flexDirection: 'row',
                        "@media screen and (max-width: 900px)": {
                            flexDirection: 'column',
                        },
                    }}>
                        <StyledCard sx={{ flex: 1 }}>
                            <StyledTextContainer fontWeight={600}>
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
                        </StyledCard>
                        <StyledCard sx={{ flex: 1 }}>当前没有内容。。。</StyledCard>
                    </Box>
                </Box>
            </FlexBox>
        </Box>
    );  
};

export default About;